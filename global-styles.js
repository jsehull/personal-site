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

  img {
    max-width: 100%;
  }

  a {
    color: ${theme.colors.black};
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
