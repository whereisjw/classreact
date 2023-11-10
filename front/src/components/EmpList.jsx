import React from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const EmpList = () => {
  const [empList, setEmpList] = useState([]);

  //서버연동작업 : axios
  const { isPending, error, data } = useQuery({
    queryKey: ["empData"],
    queryFn: () =>
      axios
        .get("http://127.0.0.1:8000/")
        .then((result) => setEmpList(result.data)),
  });

  return (
    <>
      {" "}
      <h2>Employees</h2>
      {isPending && <p>로딩중...</p>}
      <Table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>사원아이디</th>
            <th>사원명</th>
            <th>입사일</th>
            <th>부서</th>
            <th>폰번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((employee) => (
            <tr key={employee.emp_id}>
              <td>{employee.rno}</td>
              <td>{employee.emp_id}</td>
              <td>{employee.emp_name}</td>
              <td>{employee.hire_date}</td>
              <td>{employee.dept_id}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EmpList;
