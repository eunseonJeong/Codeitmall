import { StButton, StForm, StInput } from "@/styles/styled";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const handlerChange = (e) => {
    setValue(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return router.push("/");
    }
    return router.push(`/search?q=${value}`);
  };
  return (
    <StForm onSubmit={handlerSubmit}>
      <StInput
        name="q"
        value={value}
        onChange={handlerChange}
        placeholder="검색하세요."
      />
      <StButton>검색 👁️‍🗨️</StButton>
    </StForm>
  );
}
