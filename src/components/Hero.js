import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const StyledHero = styled.div`
  padding: 12rem 0;
  background: ${props => props.theme.primaryBg};
  color: ${props => props.theme.primaryColor};

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.8rem;
  }
`

const Hero = ({ title, description }) => {
  return (
    <StyledHero>
      <Container>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </Container>
    </StyledHero>
  )
}

export default Hero;