import { useEffect, useState } from "react";
import ProductList from "@/components/\bProductList";
import SearchForm from "@/components/SearchForm";
import axios from "../lib/axios";

import { Column } from "@/components/Flex";
import Page from "@/components/Page";
import styled from "styled-components";
import Header from "@/components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const responce = await axios.get("/products");
    const nextProduct = responce.data.results;
    setProducts(nextProduct);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Sttitle>ITEM</Sttitle>
      <Page>
        <Column>
          <SearchForm />
          <ProductList products={products} />
          {/* <ul>
            <li>
              <StLink href="products/1">1</StLink>
            </li>
            <li>
              <StLink href="products/2">2</StLink>
            </li>
            <li>
              <StLink href="products/3">3</StLink>
            </li>
            <li>
              <StLink href="https://www.naver.com/">naver</StLink>
            </li>
          </ul> */}
        </Column>
      </Page>
    </>
  );
}

const Sttitle = styled.div`
  font-size: 5rem;
  font-weight: 600;
  color: #fff;

  text-align: center;
`;
