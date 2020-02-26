import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';

const StyledCardSection = styled.section`
  padding: 9rem 0;
`

const CardSection = ({ cards }) => {
  return (
    <StyledCardSection>
      <Container>
        <Row>
          {
            cards.map((card, i) => {
              return <Card key={i} {...card} />
            })
          }
        </Row>
      </Container>
    </StyledCardSection>
  )
}

export default CardSection;