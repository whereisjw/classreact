import React, { useState } from "react";

const AppLogin = () => {
  const [form, setFrom] = useState({});
  const handleLoginChange = (e) => {
    let { value, name } = e.target;
    console.log(e.target);
    setFrom({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">아디</label>
        <input
          name="id"
          id="id"
          type="text"
          onChange={handleLoginChange}
          value={form.id}
        />
        <label htmlFor="pass">비밀번호</label>
        <input
          name="pass"
          id="pass"
          type="password"
          onChange={handleLoginChange}
          value={form.pass}
        />
        <button type="submit">로그인</button>
        {/* type지정은 되도록 해주기! onclick event로 할거면 type을 버튼으로하기 */}
      </form>
    </div>
  );
};

export default AppLogin;
