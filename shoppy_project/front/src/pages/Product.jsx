import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const DetailContainer = styled.div`
  display: flex;
  width: 100%;

`
const OrderContainer = styled.figure`
  flex: 0.5;
  padding: 10px;
  div{
    margin: 10px 0;
  }
  img{
    width:100%;
  }
`
const Title = styled.div`
padding: 10px 0;
border-bottom: 1px solid lightgray;
h1{
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}
p{
  font-weight: bold;
}
`
const Detail = styled.div`
span{
  font-size: 0.7rem;
  color: #d1bebe;
}
`

const Product = () => {
  const {pid} = useParams()
  const { isPending, error, data } = useQuery({
    queryKey: ['items'],
    queryFn: () =>axios.get('/shoppy.json')
    .then(res=>res.data)})
  const detailData = data && data.find((v)=>v.id == pid)


  return (
    <>
     <Container>
      {isPending && <p>로딩중입니다</p>}
   <DetailContainer>
    <OrderContainer>
    <img src={detailData?.url && detailData?.url} alt="" />
    </OrderContainer>
    <OrderContainer>
      <Title>
        <h1>{detailData?.name && detailData?.name}</h1>
        <p>\{detailData?.price && detailData?.price}</p>
      </Title>
      <Detail><span>{detailData && detailData?.description}</span></Detail>
      <div  style={{display:"flex", alignItems:"center"}}>
        <span style={{marginRight:"5px"}}>옵션 :</span> 
        <select style={{width:"80%"}}>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
      </div>
      <div style={{display:"flex"}}>
        <button style={{flex:1, background:'linear-gradient(#e66465, #9198e5)', borderRadius:"5px"}}>장바구니에 추가</button>
      </div>
    </OrderContainer>
   </DetailContainer>
      </Container>
    </>
  )
}

export default Product