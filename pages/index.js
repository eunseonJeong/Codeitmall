import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "../lib/axios";
import { Column } from "@/components/Flex";
import Page from "@/components/Page";

//정적 생성을 할 때 next.js가 실행 할 함수( 상품이 자주 바뀌는 부분엔 사용하지 x )
export async function getStaticProps() {
  const response = await axios.get("/products");
  const products = response.data.results;
  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const response = await axios.get("/products");
  //   const nextProduct = response.data.results;
  //   setProducts(nextProduct);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <Page>
        <Column>
          <SearchForm />
          <ProductList products={products} />
        </Column>
      </Page>
    </>
  );
}
