import React, { useState } from "react";
import styled from "styled-components";
import Product from "./components/Product";

const Container = styled.div`
  max-width: 480px;
  margin: 10px auto;
  text-align: center;
`;
const ToggleButton = styled.button``;

const AppToggle = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((show) => !show);
  };
  return (
    <Container>
      <ToggleButton onClick={handleClick}>토글버튼</ToggleButton>
      {show && <Product></Product>}
    </Container>
  );
};

export default AppToggle;
