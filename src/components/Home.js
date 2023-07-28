import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'

export default function Home() {
  return (
    <Container>
      <Header />
      <Section
      title="model s"
      description="order online for tuchless delivery"
      backgroundImg="img9.jpg"
      leftBtnText="custom order"
      rightBtnText="existing inventory"
      />
      <Section
      title="model x"
      description="order online for tuchless delivery"
      backgroundImg="tesla.jpg"
      leftBtnText="custom order"
      rightBtnText="existing inventory"
      />
      <Section
      title="model 3"
      description="order online for tuchless delivery"
      backgroundImg="img7.jpg"
      leftBtnText="custom order"
      rightBtnText="existing inventory"
      />
      
      
      
    </Container>
    
  )
}

const Container= styled.div`
width: 100vw;
// color: red;
// weight: 200;


`
