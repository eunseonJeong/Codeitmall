import React from "react";

export default function Test() {
  return (
    <div>
      {/* <input type="file" /> */}
      <div
        onDragOver={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("type", "over");
        }}
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("type", "drop");
        }}
        onDragEnter={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("type", "enter");
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("type", "leave");
        }}
        className="dragAndDrop"
      >
        <p>드랍</p>
      </div>
    </div>
  );
}
