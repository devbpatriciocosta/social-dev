import { createGlobalStyle } from 'styled-components'

const GlobalSyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
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