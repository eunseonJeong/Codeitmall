import Header from "@/components/Header";
import { StButton } from "@/styles/styled";
import { useRouter } from "next/router";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div>
        <p>찾을 수 없는 페이지입니다.</p>
        <StButton
          onClick={() => {
            router.push("/");
          }}
        >
          홈으로 이동
        </StButton>
      </div>
    </>
  );
}
