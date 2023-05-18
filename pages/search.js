import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import React from "react";

export default function search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <h1>검색 페이지</h1>
      <SearchForm initialValue={q} />
      <h1>{q} 검색 결과</h1>
    </>
  );
}
