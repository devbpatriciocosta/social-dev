import { createGlobalStyle } from 'styled-components'

const GlobalSyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #3a3a3a;
  }
  
  a {
    color: #8933cd;
    font-weight: bold;
    text-decoration: none;
  }
`

function App ({ Component, pageProps }) {
  return (

    <>
      <GlobalSyle />
      <Component {...pageProps} />
    </>

  )
}

export default App