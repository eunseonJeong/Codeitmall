import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "../lib/axios";

import { Column } from "@/components/Flex";
import Page from "@/components/Page";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("/products");
    const nextProduct = response.data.results;
    setProducts(nextProduct);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
