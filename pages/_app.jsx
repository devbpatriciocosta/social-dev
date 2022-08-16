import { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import moment from 'moment'
import 'moment/locale/pt-br'

import theme from '../src/theme'

const GlobalSyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.background};
  }
  
  a {
    color: ${props => props.theme.primary};
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s;
  }

  a:hover {
    color: ${props => props.theme.primaryHover};
  }
`

function App ({ Component, pageProps }) {

  useEffect(() => {
    moment.locale('pt-br')
  }, [])

  return (

    <ThemeProvider theme={theme}>

      <GlobalSyle />
      <Component {...pageProps} />

    </ThemeProvider>

  )
}

export default App