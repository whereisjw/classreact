import { useState } from "react";
import "./App.css";
import Counter from "../components/Counter";
import styled from "styled-components";

const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin: 0 auto;
`;

const Total = styled.div`
  text-align: "center";
  font-size: "5rem";
  color: orange;
`;

function App() {
  // 리턴시 반드시 하나의 태그만 출력한다
  const [total, setTotal] = useState(0);

  return (
    <TotalBox className="flex_box">
      <Total style={{ textAlign: "center", fontSize: "5rem" }}>
        total : {total}
      </Total>
      <Counter setTotal={setTotal} total={total}></Counter>
      <Counter setTotal={setTotal} total={total}></Counter>
      <Counter setTotal={setTotal} total={total}></Counter>
    </TotalBox>
  );
}

export default App;

/* 
create react app (약어 : cra)
1.프로젝트 yarn start
2. public indexhtml 찾음 body안에 root 로
3. index.js를 찾음 index.js에서 reactDom에서 실제 root생성 
*/
