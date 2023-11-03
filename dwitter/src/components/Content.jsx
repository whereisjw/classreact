import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  border: 1px solid black;
  display: flex;
  width: 100%;
  height: 10vh;

  border-radius: 10px;
  margin-bottom: 10px;
`;

const Figure = styled.figure`
  width: 10%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 10px;
  & span:first-child {
    font-size: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const HandleArea = styled.div`
  width: 20%;
  text-align: right;
  & span {
    font-size: 0.7rem;
    margin-right: 8px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 80%;
  margin: 10px;
`;

const InputButton = styled.button`
  border-radius: 10px;

  background: none;
`;

const Content = ({ img, name, id, content, date }) => {
  return (
    <>
      <ContentBox>
        <Figure>
          <img src={img} alt="" />
        </Figure>
        <MainBox>
          <span>
            {name} @{id} {date}
          </span>
          <span>{content}</span>
        </MainBox>

        <HandleArea>
          <span>
            <a>편집</a>
          </span>
          <span>
            <a>삭제</a>
          </span>
        </HandleArea>
      </ContentBox>
      {/*       <Input type="text" placeholder="수정할내용을입력하세요..." />
      <InputButton>수정</InputButton> */}
    </>
  );
};

export default Content;
