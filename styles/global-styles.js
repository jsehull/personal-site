import { Global, css } from '@emotion/core'
import theme from './theme'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  h2 {
    margin-bottom: 0;
    border-bottom: 2px solid lightblue;
  }

  h3 {
    border-top: 1px dashed lightblue;
    border-bottom: 1px solid lightblue;
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${theme.colors.black};
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
