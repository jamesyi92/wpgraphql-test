import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const StyledCard = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.primaryBg};
  color: ${props => props.theme.primaryColor};

  h3 {
    font-size: 2.4rem;
  }

  p {
    margin: 0;
  }
`

const Card = ({ title, description }) => {
  return (
    <Col>
      <StyledCard>
        <h3>{ title }</h3>
        <p>{ description }</p>
      </StyledCard>
    </Col>
  )
}

export default Card