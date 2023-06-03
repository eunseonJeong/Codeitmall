import SizeReviewList from "@/components/SizeReviewList";
import axios from "../../lib/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sizeReviews, setSizwReviews] = useState();
  const router = useRouter();
  //파일명 아이디
  const { id } = router.query;

  const getProduct = async (targetId) => {
    const response = await axios.get(`/products/${targetId}`);
    const nextProduct = response.data;
    setProducts(nextProduct);
  };

  const getSizeReviews = async (targetId) => {
    const response = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = response.data.results;
    setSizwReviews(nextSizeReviews);
  };

  useEffect(() => {
    if (!id) return;
    getProduct(id);
    getSizeReviews(id);
  }, [id]);

  //맨 처음엔 product 값이 없을테니 아무것도 렌더링 해주지 않겠다!
  if (!products)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  return (
    <>
      <h3>{products.name}</h3>
      <h3>{products.price}원</h3>
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "500px",
        }}
      >
        <Image
          fill
          src={products.imgUrl}
          alt={products.name}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <SizeReviewList sizeReviews={sizeReviews} />
    </>
  );
}
