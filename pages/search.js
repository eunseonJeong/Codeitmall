import ProductList from "@/components/\bProductList";
import SearchForm from "@/components/SearchForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [products, setProducts] = useState([]);

  const getProducts = async (query) => {
    try {
      const responce = await axios.get(`/products/?q=${query}`);
      console.log("서치 responce:", responce);
      const nextProducts = responce.data.results;
      setProducts(nextProducts);
    } catch (error) {
      alert("찾으시는 검색 결과가 없습니다.");
    }
  };

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <>
      <h1>검색 페이지</h1>
      <SearchForm initialValue={q} />
      <h1>{q} 검색 결과</h1>
      <ProductList products={products} />
    </>
  );
}
