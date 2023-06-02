// import ProductList from "@/components/ProductList";
// import SearchForm from "@/components/SearchForm";
// import axios from "axios";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { styled } from "styled-components";

// export default function Search() {
//   const router = useRouter();
//   const { q } = router.query;
//   const [products, setProducts] = useState([]);

//   const getProducts = async (query) => {
//     try {
//       const response = await axios.get(`/products/?q=${query}`);
//       const nextProducts = response.data.results;
//       setProducts(nextProducts);
//     } catch (error) {
//       console.log(error);
//       alert("찾으시는 검색 결과가 없습니다.");
//     }
//   };

//   useEffect(() => {
//     getProducts(q);
//   }, [q]);

//   return (
//     <>
//       <Head>
//         <title>{q} 검색 결과 - Codeitmall </title>
//       </Head>
//       <SearchForm initialValue={q} />
//       <StTitle>
//         <StSpan>{q} 검색 결과</StSpan>
//       </StTitle>
//       <StProduct>
//         <ProductList products={products} />
//       </StProduct>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import styles from "@/styles/Search.module.css";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
