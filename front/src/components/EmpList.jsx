import React from "react";
import Table from 'react-bootstrap/Table';
import {useState, useEffect} from 'react';
import axios from "axios";

export default function EmpList(){
  const [empList, setEmpList] = useState([]); 
  useEffect(()=>{
    //서버연동작업 : axios
    axios
      .get('http://127.0.0.1:8000/') //서버에서 결과를 객체로 전송! {data:{서버결과}}
      .then((result) => {
        // console.log(result);  //[object, object] --> {result:{data:{서버결과}}}
        // console.log(result.data[0].emp_name);
        setEmpList(result.data); 
      });    
  }, []);

  return(
    <>
    <h2>Employees</h2>
    <Table striped bordered hover>
      <thead>
        <th>번호</th>
        <th>사원아이디</th>
        <th>사원명</th>
        <th>입사일</th>
        <th>부서</th>
        <th>폰번호</th>
        <th>이메일</th>
      </thead>
      <tbody>
        {empList.map((employee)=>
          <tr>
          <td>{employee.rno}</td>
          <td>{employee.emp_id}</td>
          <td>{employee.emp_name}</td>
          <td>{employee.hire_date}</td>
          <td>{employee.dept_id}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
        </tr>
        )}        
      </tbody>
    </Table>
    </>
  );
}