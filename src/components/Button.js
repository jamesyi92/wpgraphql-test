import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  padding: 1rem 2.5rem;
  background: #000000;
  color: #ffffff;
  font-size: 1.6rem;
  border-radius: 2px;
  cursor: pointer;
`

const Button = ({ children }) => {
  return (
    <StyledButton>
      { children }
    </StyledButton>
  )
}

export default StyledButton