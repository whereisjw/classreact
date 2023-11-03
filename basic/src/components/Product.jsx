import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  //products.json --> fetch사용
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [로딩, set로딩] = useState(true);
  useEffect(() => {
    axios.get(`data/${checked ? "sale" : "products"}.json`).then((result) => {
      setProducts(result.data);
      set로딩(false);
    });

    return () => {};
  }, [checked]);

  return (
    <div>
      {로딩 ? <h1>로딩중</h1> : <h1>Show products!!!</h1>}
      <input
        type="checkbox"
        id="checkbox"
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <label htmlFor="checkbox">세일중인상품만보기</label>
      <ul>
        {products.map((v) => (
          <li>
            <h3>name:{v.name}</h3>
            <h3>price:{v.price}</h3>
            <h3>id :{v.id}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
