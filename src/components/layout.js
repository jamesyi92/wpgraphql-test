import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../utils/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { visierTheme, anotherTheme } from '../utils/themes'

import '../scss/main.scss'

import Header from './header'

const Layout = ({ children }) => {

  const storedValue = localStorage.getItem('isVisierTheme');
  const [isVisierTheme, setIsVisierTheme] = useState(storedValue === 'true' ? true : false);

  const toggleTheme = () => {
    setIsVisierTheme(!isVisierTheme);
    localStorage.setItem('isVisierTheme', !isVisierTheme);
    console.log('clicked');
  }

  return (
    <ThemeProvider theme={ isVisierTheme ? visierTheme : anotherTheme }>
      <>
        <GlobalStyle />
        <Header toggleTheme={ toggleTheme } />
        <main>{ children }</main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
