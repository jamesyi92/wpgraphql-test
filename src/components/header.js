import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Container } from 'reactstrap'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 3rem 0;
  
  .navbar {
    padding: 0;
  }

  .logo {
    font-size: 1.8rem;
  }
`

const Header = () => (
  <StyledHeader>
    <Container>
      <Navbar>
        <Link className="logo" to="/">Visier WPGraphQL</Link>
      </Navbar>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
