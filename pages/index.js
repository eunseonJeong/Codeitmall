import { Column, Row } from "@/components/Flex";
import Page from "@/components/Page";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Sttitle>ITEM</Sttitle>
      <Page>
        <Column>
          <SearchForm />
          <ul>
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
          </ul>
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

const StLink = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;
