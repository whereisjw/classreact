import React from 'react'
import { Container, Table } from 'react-bootstrap'
import styled from 'styled-components'
import {BsCart4} from 'react-icons/bs'

const CartContainer = styled.div`
  background: white;
  margin: 10px 0;
  padding: 30px 10px;
  border: 1px solid lightgray;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`
const Title = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  display: flex;
  align-items: center;
  span{
    margin-left: 10px;
  }
`
const TdItem = styled.td`
h1{
  font-weight: bold;
  height: 50%;
}
p{
  height: 50%;
}
`

const Cart = () => {
  return (
    <>
    <Container>
      <CartContainer>
        <Title><BsCart4/><span>장바구니</span></Title>
        <table style={{marginTop:"10px"}}striped bordered hover >
          <thead style={{borderTop:"1px solid black",borderBottom:"1px solid black"}}>
            <tr>
              <th style={{width:"10%"}}>#</th>
              <th>상품정보</th>
              <th>상품금액</th>
              <th>배송비</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{marginTop:"10px",borderTop:"1px solid black",borderBottom:"1px solid black"}}>
              <td>
                  <img style={{width:"78px", height:"78px"}} src="./images/image/1.webp" alt="" />
              </td>
              <TdItem style={{verticalAlign:"top"}}>
                <h1>가나다라마바사</h1>
                <p>가나다라마바사</p>
              </TdItem>
              <td style={{verticalAlign:"top"}}>금액</td>
              <td style={{verticalAlign:"top"}}>배송비</td>
            </tr>

          </tbody>
        </table>
      </CartContainer>
    </Container>
    </>
  )
}

export default Cart