import { StLink } from "@/styles/styled";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <StHeaderContainer>
        <StLink href="/">어서오시게</StLink>
        <StLink href="/setting">설정</StLink>
      </StHeaderContainer>
    </StHeader>
  );
}

const StHeader = styled.header`
  border-bottom: 1px solid #1f1f1f;
`;

const StHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
`;
