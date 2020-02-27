import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled, { css } from 'styled-components';

const bgStyle = css`
  padding: 12rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #ffffff;

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 0;
  }

`

const StyledBackgroundImage = styled(BackgroundImage)`
  ${bgStyle}
`

const StyledBackground = styled.div`
  ${bgStyle}
  background: #444444;
`



const BgImage = ({ img, children }) => {

  if(img) {
    return (
      <StyledBackgroundImage
        fluid={ img }
      >
        { children }
      </StyledBackgroundImage>
    )
  } else {
    return (
      <StyledBackground>
        { children }
      </StyledBackground>
    )
  }
}

export default BgImage;