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
      router.push("/");
      return;
    }
    router.push(`/search?q=${value}`);
  };
  return (
    <StForm onSubmit={handlerSubmit}>
      <StInput name="q" value={value} onChange={handlerChange} />
      <StButton>검색👁️‍🗨️</StButton>
    </StForm>
  );
}
