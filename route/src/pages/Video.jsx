import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Video(){
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handlechange = (e) => {
    setText(e.target.value);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    setText('');
    //text 파라미터를 /video/text파라미터 전송
    navigate(`/video/${text}`);
  }

  return(
    <>
    <div>Video page!!</div>
    <form onSubmit={handlesubmit}>
      <input 
            type="text"
            name="videoId"
            placeholder="video Id : "
            value={text}
            onChange={handlechange} />
    </form>
    </>
  );
}