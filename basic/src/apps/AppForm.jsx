import React, { useState } from "react";

const AppForm = () => {
  const [form, setFrom] = useState({ name: "", email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
    if (form.name.length > 10) {
      return alert("이름이 너무길어요");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>폼</legend>
          <label htmlFor="name">이름 :</label>
          <input type="text" name="name" id="name" onChange={onChange} />
          <br />
          <label htmlFor="email">이메일:</label>
          <input type="text" name="email" id="email" onChange={onChange} />{" "}
          <br />
          <button type="submit">전송</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AppForm;
