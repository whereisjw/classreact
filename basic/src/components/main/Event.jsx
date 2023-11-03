import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const ImgContainer = styled.div`
  width: 500px;
  height: 80px;
  margin-top: 20px;
  &:first-child {
    margin-right: 10px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Event = () => {
  return (
    <div>
      <Container style={{ display: "flex" }}>
        <ImgContainer>
          <img src="/file/타자왕.png" alt="" />
        </ImgContainer>
        <ImgContainer>
          <img src="/file/경품추천.png" alt="" />
        </ImgContainer>
      </Container>
    </div>
  );
};

export default Event;
