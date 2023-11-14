import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  color: whitesmoke;
  h1{
    font-size: 3rem;
    font-weight: 600;
  }
`
const ProductBox = styled.div`
/* display: flex; */
cursor: pointer;
`

const ProductFigure = styled.figure`
/* flex: 1/3; */
padding: 10px 7px;
img{
  width: 100%;
}
`

const Home = () => {
  let navigate = useNavigate()
  const [itemImg,setItemImg] = useState([])
  const { isPending, error, data } = useQuery({
    queryKey: ['items'],
    queryFn: () =>axios.get('/shoppy.json')
    .then(res=>res.data)})
  return (
    <>
        <Container>
          <figure style={{width:"100%", height:"50vh", position:"relative"}}>
            <img style={{width:"100%",height:"100%"}} src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVDJTg3JUJDJUVEJTk1JTkxfGVufDB8fDB8fHww" alt="" />
            <Title><h1>Shop with Shoppy</h1><p>Best products, High Quality</p></Title>          
          </figure>
          {isPending && <h1>로딩중...</h1>}
          <ProductBox>
            <Row>
          {data && data.map((v,i)=>(
            <Col md={4}>
               <ProductFigure onClick={()=>navigate(`/products/${v.id}`)}>
               <img src={v.url} alt="" />
             </ProductFigure>
             </Col>
          ))}
          </Row>
          </ProductBox>
        </Container>
    </>
  )
}

export default Home