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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }

  h1,
  h2,
  h3 {
    font-family: ${theme.misc.firaCode};
  }

  h1,
  h2 {
    margin: 0 auto 10px;
    border-bottom: ${theme.misc.solidTwoPx};
  }

  h1 {
    font-size: 2em;
  }

  h3 {
    margin: 1.25em 0;
    border-bottom: ${theme.misc.dashedTwoPx};
  }

  p:last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  a {
    font-family: ${theme.misc.firaCode};
    color: ${theme.colors.black};
    text-decoration: none;

    &:hover {
      cursor: pointer;
      border-bottom: ${theme.misc.solidTwoPx};
    }
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
