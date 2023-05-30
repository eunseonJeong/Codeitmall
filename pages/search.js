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

const StTitle = styled.title`
  padding: 0 10px;
  color: #b5b5b5;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
`;

const StSpan = styled.span`
  color: #f9f9f9;
  font-weight: 700;
`;

const StProduct = styled.div`
  margin: 30px 0 60px;
`;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import { styled } from "styled-components";
import Page from "@/components/Page";
import { Column } from "@/components/Flex";

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
        <title>{q} 검색 결과 - Codeitmall </title>
      </Head>
      <Page>
        <Column>
          <SearchForm initialValue={q} />
          <StTitle>
            <StSpan>{q} 검색 결과</StSpan>
          </StTitle>
          <StProduct>
            <ProductList products={products} />
          </StProduct>
        </Column>
      </Page>
    </>
  );
}
