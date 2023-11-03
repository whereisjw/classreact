import React, { useState } from "react";
import styled from "styled-components";

const CountBox = styled.div`
  background: linear-gradient(#e66465, #9198e5);
  margin: 10px auto;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  display: flex;
  height: 100px;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const Number = styled.span`
  font-size: 30px;
  transition: all 0.2s linear;
  &:hover {
    transform: rotateX(720deg);
  }
`;
const NButton = styled.button`
  background-color: tomato;
  border-radius: 50%;
  padding: 5px;
  &:active {
    transform: scale(1.5);
  }
`;

const Counter = ({ setTotal, total }) => {
  const [counter, setCounter] = useState(0);

  function increase(a = 1) {
    setCounter((counter) => counter + a);
    setTotal((total) => total + a);
  }

  return (
    <div>
      <CountBox>
        <Number>
          {counter}/{total}
        </Number>
        <NButton
          type="button"
          onClick={() => {
            increase();
          }}>
          Add + 1
        </NButton>
      </CountBox>
    </div>
  );
};

export default Counter;
