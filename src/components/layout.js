import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../utils/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { visierTheme } from '../utils/themes'

import '../scss/main.scss'

import Header from './header'

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={ visierTheme}>
      <>
        <GlobalStyle />
        <Header />
        <main>{ children }</main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
