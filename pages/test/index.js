import React, { useEffect, useState } from "react";

export default function Test() {
  // const onClickHandler = () => {
  //   alert("클릭!!!");
  // };

  // const onDownHandler = () => {
  //   return false;
  // };
  const onClickHandler = () => {
    alert("더블 클릭!");
  };

  return (
    <>
      {/* <button>테스트</button> */}
      <button onDoubleClick={onClickHandler}>더블 클릭해야 반응합니다.</button>
    </>
  );
}
