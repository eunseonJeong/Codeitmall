import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

export default function ProductList({ products = [] }) {
  return (
    <StProductList>
      {products.map((product) => (
        <li key={product.id}>
          <StProduct href={`products/${product.id}`}>
            <Image
              src={product.imgUrl}
              alt={product.name}
              width="300"
              height="300"
            />
            <StProductName>{product.name}</StProductName>
            {product.price}원
          </StProduct>
        </li>
      ))}
    </StProductList>
  );
}

const StProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;
  gap: 24px;
`;

const StProduct = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none;
`;
const StProductName = styled.span`
  font-size: 20px;
  font-weight: 800;
`;
