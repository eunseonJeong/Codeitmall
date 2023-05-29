import Image from "next/image";
import React from "react";

export default function Test() {
  return (
    <div
      style={{
        position: "relative",
        width: "50%",
        height: "500px",
      }}
    >
      <p>사진</p>
      <Image
        fill
        src="/IMG.png"
        alt="고양이"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
