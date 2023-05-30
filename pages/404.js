import Header from "@/components/Header";
import { StButton } from "@/styles/styled";
import { useRouter } from "next/router";
import React from "react";
import { styled } from "styled-components";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <StNotFound>
        <StContent>
          <p>찾을 수 없는 페이지입니다.</p>
          <StButton
            onClick={() => {
              router.push("/");
            }}
          >
            홈으로 이동
          </StButton>
        </StContent>
      </StNotFound>
    </>
  );
}

const StNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StContent = styled.div`
  margin: 25px 0 60px;
  text-align: center;
`;
