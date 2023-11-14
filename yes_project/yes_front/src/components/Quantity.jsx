import React, { useState } from "react";

export default function Quantity(){
  const [count,setCount] = useState(0)
const handleDecrease = ()=>{setCount((count)=>count<=0 ? count = 0 : count-1)
count == 0 && alert('최소수량은 1개임')}
const handleIncrease = ()=>{setCount(count=>count>=10 ? count=10 : count+1)
count == 10 && alert('최대수량은 10개임')}

function quantityCheck(checkFlag,e){// 파라미터,이벤트 동시에 사용 시 이벤트를 반드시 뒤에 적는다
  if(checkFlag == 'minus'){ //minus
    setCount((count)=>count<=0 ? count = 0 : count-1);
    count == 0 && alert('최소수량은 1개임');
  }else{//plus
    setCount(count=>count>=10 ? count=10 : count+1);
count == 10 && alert('최대수량은 10개임');
  }
}


  return(
    <div className="quantity">
    <p>      
      <input type="checkbox" />
      <span onClick={()=>{quantityCheck('minus')}}>-</span>
      <span>{count}</span>
      <span onClick={()=>{quantityCheck('plus')}}>+</span>
    </p>
    </div>
  );
}