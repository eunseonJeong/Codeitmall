import ProductList from "@/components/\bProductList";
import SearchForm from "@/components/SearchForm";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const q = router.query["q"];
  const [products, setProducts] = useState([]);

  const getProducts = async (query) => {
    try {
      const response = await axios.get(`/products/?q=${query}`);
      console.log("서치 response:", response);
      const nextProducts = response.data.results;
      setProducts(nextProducts);
    } catch (error) {
      console.log(error);
      alert("찾으시는 검색 결과가 없습니다.");
    }
  };

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall </title>
      </Head>
      <SearchForm initialValue={q} />
      <h1>{q} 검색 결과</h1>
      <ProductList products={products} />
    </>
  );
}
