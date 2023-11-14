import React from 'react'
import styled from 'styled-components'
import Product from './../pages/Product';
import {FaPencilAlt,FaShopify} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Header = styled.header`
    height: 10vh;
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`
const UpperNav = styled.div`
border-bottom: 1px solid lightgray;
display: flex;
align-items: center;
justify-content: space-between;
height: 50%;
width: 90%;
margin: 0 auto;
h1{
    font-weight: bold;
    font-size: 1.2rem;
}
span{
    margin:0 7px
}
`
const LowerNav = styled.div`
height: 50%;
width: 90%;
margin: 0 auto;
span{
    font-size: 0.7rem;
}`

const Navbar = () => {
  return (
    <Header>
            <UpperNav>
            <Link to='/'>
                 <div style={{display:'flex'}}>
                     <h1><FaShopify/></h1>
                     <h1>Shoppy</h1>
                 </div>
            </Link>
                <div>
                    <Link to='/products'><span>Product</span></Link>
                    <Link to='/cart'><span>Cart</span></Link>
                    <Link to='/new'><span><FaPencilAlt/></span></Link>
                    <Link to='/login'><span>Login</span></Link>
                </div>
            </UpperNav>
            <LowerNav> <Link to='/'><span>Home</span></Link></LowerNav>

    </Header>
  )
}

export default Navbar