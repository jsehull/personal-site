import { Global, css } from '@emotion/core'
import theme from './theme'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.green};
    color: ${theme.colors.black};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    font-family: ${theme.misc.firaCode};
    color: ${theme.colors.blackHeader};
  }

  h1,
  h2 {
    margin: 0 auto 1em;
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
    color: ${theme.colors.black};
    font-family: ${theme.misc.firaCode};
    border-bottom: ${theme.misc.solidTwoPx};
    text-decoration: none;

    &:hover {
      cursor: pointer;
      background: ${theme.colors.blueLines};
    }
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
