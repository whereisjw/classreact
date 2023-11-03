import React from "react";
import styled from "styled-components"; //children-->children
import styles from "./header.module.css";
import { Container } from "react-bootstrap";

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  & div {
    padding: 5px 10px;
    width: 230px;
    height: 42px;
  }
  & div img {
    width: 100%;
    height: 100%;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  height: 8vh;
  & p:nth-child(2) {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    width: 20%;
  }

  & p {
    flex: 1;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`;

const Navbar = ({ children }) => {
  return (
    <>
      <Container>
        <Header>
          <div>
            <img
              className={styles.img_h}
              src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png"
              alt=""
            />
          </div>
        </Header>
      </Container>
      <CategoryBox>
        <p></p>
        <p>카테고리</p> <p>오특 </p>
        <p>랭킹</p> <p>LUXE EDIT </p>
        <p>기획전</p> <p>세일</p> <p>기프트카드</p> <p>멤버십/쿠폰</p>{" "}
        <p>이벤트</p>
        <p></p>
      </CategoryBox>
    </>
  );
};

export default Navbar;
