import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

export default function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  // console.warn(props)
  return (
    
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Button>
      <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
      <ArrowDown src="/images/arrow4.jpg" />
      </Button>
      
      
    </Wrap>


  )
}

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size: cover;
background-position : center;
background-repeat: no-repeat;
background-image: url('/images/img9.jpg'); 
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImage}")`}

`

const ItemText= styled.div`
padding-top: 10vh;
text-align: center;
text-transform: uppercase;
// line-spacing: 2px;
`

const ButtonGroup= styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 768px){
  flex-direction: column;
}

`
const LeftButton= styled.div`
background-color:rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;

`

const RightButton= styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;
`

const ArrowDown= styled.img`

height: 40px;
animation: animateDown infinite 1.5s;

`

const Button=styled.div`
`