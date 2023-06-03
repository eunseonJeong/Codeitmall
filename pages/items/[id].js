import SizeReviewList from "@/components/SizeReviewList";
import axios from "../../lib/axios";
import React, { useState } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import Dropdown from "@/components/DropDown";
import Input from "@/components/Input";
import StarRating from "@/components/StarRating";
import styles from "../../styles/Product.module.css";
import { sizeReviewLabels } from "@/lib/sizeReviewLabels";

//자주 바뀌는 정적파일을 프리렌더링 하고 싶을 때 'getserversideprops' 사용 , 정적생성+SSR은 동시에 사용x
export async function getServerSideProps(context) {
  //파일명 아이디
  const productId = context.params["id"];

  let products;
  try {
    const response = await axios.get(`/products/${productId}`);
    products = response.data;
  } catch {
    return {
      notFound: true,
    };
  }

  const response = await axios.get(`/size_reviews/?product_id=${productId}`);
  const sizeReviews = response.data.results ?? [];

  return {
    props: {
      products,
      sizeReviews,
    },
  };
}

export default function Products({
  products,
  sizeReviews: initialSizeReviews,
}) {
  const [sizeReviews, setSizeReviews] = useState(initialSizeReviews);
  const [formValue, setFormValue] = useState({
    size: "M",
    sex: "male",
    height: "163",
    fit: "good",
  });

  async function onHandleSubmit(e) {
    e.preventDefault();
    const sizeReview = {
      ...formValue,
      productId: products.id,
    };
    const response = await axios.post("size_reviews/", sizeReview);
    const newSizeReview = response.data;
    setSizeReviews((preSizeReviews) => [newSizeReview, ...preSizeReviews]);
  }

  async function onHandleInputChg(e) {
    const { name, value } = e.target;
    onHandleChg(name, value);
  }

  async function onHandleChg(name, value) {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  //맨 처음엔 product 값이 없을테니 아무것도 렌더링 해주지 않겠다!
  if (!products)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  return (
    <>
      <h1 className={styles.name}>
        {products.name}
        <span className={styles.englishName}>{products.englishName}</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image fill src={products.imgUrl} alt={products.name} />
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>제품 정보</h2>
        <div className={styles.info}>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>브랜드 / 품번</th>
                <td>
                  {products.brand} / {products.productCode}
                </td>
              </tr>
              <tr>
                <th>제품명</th>
                <td>{products.name}</td>
              </tr>
              <tr>
                <th>가격</th>
                <td>
                  <span className={styles.salePrice}>
                    {products.price.toLocaleString()}원
                  </span>{" "}
                  {products.salePrice.toLocaleString()}원
                </td>
              </tr>
              <tr>
                <th>포인트 적립</th>
                <td>{products.point.toLocaleString()}</td>
              </tr>
              <tr>
                <th>구매 후기</th>
                <td className={styles.starRating}>
                  <StarRating value={products.starRating} />{" "}
                  {products.starRatingCount.toLocaleString()}
                </td>
              </tr>
              <tr>
                <th>좋아요</th>
                <td className={styles.like}>
                  ♥{products.likeCount.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사이즈 추천</h2>
        <SizeReviewList sizeReviews={sizeReviews ?? []} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>사이즈 추천하기</h2>
        <form className={styles.sizeForm} onSubmit={onHandleSubmit}>
          <label className={styles.label}>
            사이즈
            <Dropdown
              className={styles.input}
              name="size"
              value={formValue.size}
              options={[
                { label: "S", value: "S" },
                { label: "M", value: "M" },
                { label: "L", value: "L" },
                { label: "XL", value: "XL" },
              ]}
              onChange={onHandleChg}
            />
          </label>
          <label className={styles.label}>
            성별
            <Dropdown
              className={styles.input}
              name="sex"
              value={formValue.sex}
              onChange={onHandleChg}
              options={[
                { label: sizeReviewLabels.sex["male"], value: "male" },
                { label: sizeReviewLabels.sex["female"], value: "female" },
              ]}
            />
          </label>
          <label className={styles.label}>
            키
            <Input
              className={styles.input}
              name="height"
              min="50"
              max="200"
              type="number"
              value={formValue.height}
              onChange={onHandleInputChg}
            />
          </label>
          <label className={styles.label}>
            사이즈 추천
            <Dropdown
              className={styles.input}
              name="fit"
              value={formValue.fit}
              options={[
                { label: sizeReviewLabels.fit["small"], value: "small" },
                { label: sizeReviewLabels.fit["good"], value: "good" },
                { label: sizeReviewLabels.fit["big"], value: "big" },
              ]}
              onChange={onHandleChg}
            />
          </label>
          <Button className={styles.submit}>작성하기</Button>
        </form>
      </section>
    </>
  );
}
