import axios from "../../lib/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState();
  const router = useRouter();
  //파일명 아이디
  const { id } = router.query;

  const getProduct = async (targetId) => {
    const responce = await axios.get(`/products/${targetId}`);
    console.log("responce", responce);
    const nextProduct = responce.data;
    setProduct(nextProduct);
  };

  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  if (!product) return null;

  return (
    <>
      <div>Products {id} 페이지</div>
      <h3>{product.name}</h3>
      <h3>{product.price}원</h3>
      <img src={product.imgUrl} alt={product.name} />
    </>
  );
}
