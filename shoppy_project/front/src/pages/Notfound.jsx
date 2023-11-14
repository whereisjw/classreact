import React from 'react'
import styled from 'styled-components'

const ImgBox = styled.div`
    width: 100vw;
    height: 100vh;
    img{
        width: 100%;
        height: 100%;
    }
`

const Notfound = () => {
  return (
    <ImgBox><img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTk3JTkwJUVCJTlGJUFDJUVEJThFJTk4JUVDJTlEJUI0JUVDJUE3JTgwfGVufDB8fDB8fHww" alt="" /></ImgBox>
  )
}

export default Notfound