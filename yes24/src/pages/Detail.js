import React from "react";

const Detail = ({ now }) => {
  return (
    <div>
      <h1>국내도서 {now ? now : "종합"} 베스트</h1>
      <hr />
    </div>
  );
};

export default Detail;
