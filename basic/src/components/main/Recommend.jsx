import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 800;
  position: relative;
`;

const More = styled.a`
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 0.8rem;
  color: lightgray;
  text-decoration: none;
  & span {
    font-size: 0.7rem;
    color: lightgray;
  }
`;

const Card = styled.div`
  width: 180px;
  height: 270px;

  & figure {
    height: 66%;
    width: 100%;
  }
  & figure img {
    height: 100%;
    width: 100%;
  }
  & figcaption {
    text-align: center;
  }
  & p span:first-child {
    font-size: 0.9rem;
    color: lightgray;
    text-decoration-line: line-through;
  }
  & p {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  & p span:nth-child(2) {
    font-weight: bold;
    color: red;
  }
  & p span {
    margin-right: 10px;
    font-size: 1rem;
  }
`;

const Recommend = () => {
  return (
    <Container style={{ marginTop: "10vh" }}>
      <Row>
        <Col md="6">
          <ExplainBox>
            <span>유사한 고객님이</span>
            <span>많이 구매했어요</span>
            <More>
              더보기 <span>&gt;</span>
            </More>
          </ExplainBox>
        </Col>
        <Col md="6">
          <ExplainBox>
            <span>고객님을 위한 추천상품</span>
            <More>
              더보기 <span>&gt;</span>
            </More>
          </ExplainBox>
        </Col>
      </Row>

      <Row>
        <Col md="3">
          <Card>
            <figure>
              <img
                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018419102ko.jpg?l=ko"
                alt=""
              />
            </figure>
            <figcaption>
              <p>에스트라 아토베리어365 하이드로에센스</p>
              <p>
                <span>32,000</span>
                <span>22,800원</span>
              </p>
            </figcaption>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <figure>
              <img
                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018419102ko.jpg?l=ko"
                alt=""
              />
            </figure>
            <figcaption>
              <p>에스트라 아토베리어365 하이드로에센스</p>
              <p>
                <span>32,000</span>
                <span>22,800원</span>
              </p>
            </figcaption>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <figure>
              <img
                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018419102ko.jpg?l=ko"
                alt=""
              />
            </figure>
            <figcaption>
              <p>에스트라 아토베리어365 하이드로에센스</p>
              <p>
                <span>32,000</span>
                <span>22,800원</span>
              </p>
            </figcaption>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <figure>
              <img
                src="https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018419102ko.jpg?l=ko"
                alt=""
              />
            </figure>
            <figcaption>
              <p>에스트라 아토베리어365 하이드로에센스</p>
              <p>
                <span>32,000</span>
                <span>22,800원</span>
              </p>
            </figcaption>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Recommend;
