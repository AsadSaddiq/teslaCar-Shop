import React, { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import { Translate } from '@mui/icons-material';

export default function Header() {
  
  const [burgerState, setBurgerState] = useState(false);

  return (

    <Container>
      <Logo src="/images/tesla_logo.png" />

      <Menu>
      <a href='#'>MODEL S</a>
      <a href='#'>MODEL X</a>
      <a href='#'>MODEL 3</a>
      <a href='#'>MODEL Y</a>
      </Menu>
      <RihtMenu>
        <a href="#">SHOP</a>
        <a href="#">TESLA ACCOUNT</a>
        <a href='#'>
        <MenuIcon onClick= {()=>setBurgerState(true) }>

        </MenuIcon>
        </a>
       
      </RihtMenu>
      
      <BurgerNav show={burgerState}>
        {/* <li><a href='#'> */}
          <CloseCustom>
          <ClearIcon onClick={()=>setBurgerState(false)}/>
          </CloseCustom>      
          {/* </a></li> */}
        <li><a href='#'>Existing Inventary</a></li>
        <li><a href='#'>New Inventary</a></li>
        <li><a href='#'>Old cars</a></li>
        <li><a href='#'>new cars</a></li>
        <li><a href='#'>Existing Inventary</a></li>
        <li><a href='#'>Existing Inventary</a></li>
      </BurgerNav>

    </Container>
  )
}

const Container=styled.div`
width: 100vw;
// background-color: blue;
min-height:60px;
display: fles;
flex: 1;
align-items: center;
justify-content: space-between;
padding:0px;
background: rgba(118, 170, 199, 0.379);
position: fixed;
top: 0;
left: 0px;
right: 0px;
// margin-left: 50px;
z-index:1;
// padding-right: 600px;

`
const Logo=styled.img`
width: 80px;
height:60px;
margin-left: 50px;
`

const Menu=styled.div`
display: flex;
align-items: center;
// flex: 1;
justify-content: space-between;

a {
  color: black;
  font-weight: 600;
  padding: 0 10px;
  display: flex;
  flex-wrap: no-wrap;
}

@media(max-width: 786px) {
  display: none;
}

`

const RihtMenu= styled.div`
display: flex;
align-items: center;
margin-right: 50px;
a{
  font-weight: 600;
  color: black;
  padding: 0 10px;
}
align-items:center;

`

// const CustomMenu= styled.div`
// align-items: center;
// `

const BurgerNav= styled.div`
top: 0px;
right: 0;
// bottom: 0;
width:300px;
// margin-right: 50px;
position: fixed;
background: white;
list-style: none;
display: flex;
padding: 20px;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'TranslateX(100%)'};
transition: transform 0.2s;
li {
  padding: 15px 0;
  border-bottom: 1px solid black;
}
a {
  font-weight: 600;
  color: black;
}
}`

const CloseCustom= styled.div`
display: flex;
cursor: pointer;
justify-content: flex-end;
`