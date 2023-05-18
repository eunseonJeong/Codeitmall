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
    <form onSubmit={handlerSubmit}>
      <input name="q" value={value} onChange={handlerChange} />
      <button>검색👁️‍🗨️</button>
    </form>
  );
}
