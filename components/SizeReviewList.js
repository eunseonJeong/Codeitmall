import React from "react";

const formatDate = (date) => {
  const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const YYYY = String(date.getUTCFullYear());

  return `${YYYY}년 ${MM}월 ${dd}일`;
};

const labels = {
  sex: {
    male: "남자",
    female: "여자",
  },
  fit: {
    small: "작음",
    good: "적당함",
    big: "큼",
  },
};

export default function SizeReviewList({ sizeReviews }) {
  return (
    <>
      <h3>Reviews</h3>

      {sizeReviews?.map((sizeReviews) => (
        <div key={sizeReviews.id}>
          <div>
            <div>🔸{formatDate(new Date(sizeReviews.createdAt))}</div>
          </div>

          <div>
            ({labels.sex[sizeReviews.sex]}: {sizeReviews.height}cm 기준 사이즈:{" "}
            {sizeReviews.size})
          </div>

          <div>{labels.fit[sizeReviews.fit]}</div>
        </div>
      ))}
    </>
  );
}
