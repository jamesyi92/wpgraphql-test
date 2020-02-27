import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import BackgroundImage from './BackgroundImage'


const Hero = ({ title, description, backgroundImage  }) => {

  return (
    <section>
      <BackgroundImage img={ backgroundImage && backgroundImage.imageFile.childImageSharp.fluid  }>
        <Container>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </Container>
      </BackgroundImage>
    </section>
  )
}

export default Hero;