import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  border: 1px solid black;
  height: 20vh;
  position: absolute;
  bottom: 0;
  width: 100vw;
`;

const Footer = () => {
  return <FooterBox>Footer</FooterBox>;
};

export default Footer;
