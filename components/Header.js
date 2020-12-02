import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledHeader = styled.header`
  margin: 0 auto;
  width: 100%;
  background: ${theme.colors.green};

  a {
    font-weight: bold;
  }
`

const FlexContainer = styled.div`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.misc.widthDesktop};
`

const NavLogo = styled.a`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  border-bottom: none;

  &:hover {
    cursor: pointer;
    border-bottom: none;
  }
`

const NavMenu = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  list-style: none;
`

const NavLink = styled.a`
  margin: 0;
  margin-right: 10px;
  padding: 5px 7px;
  font-size: 0.8em;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: ${theme.misc.solidTwoPx};
    background: ${theme.colors.blueLines};
  }

  // button colors coded to match <Section /> types
  &:first-child {
    background: ${theme.colors.yellow};
  }

  &:nth-child(2) {
    background: ${theme.colors.blue};
  }

  &:nth-child(3) {
    margin-right: 0;
    background: ${theme.colors.purple};
  }

  @media (min-width: 350px) {
    padding: 5px 10px;
    font-size: 0.9em;
  }

  @media (min-width: 950px) {
    padding: 10px;
    font-size: 1em;
  }
`

const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <NavLogo href='/'>jsehull</NavLogo>
      <NavMenu>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/work'>Work</NavLink>
        <NavLink href='/blog'>Blog</NavLink>
      </NavMenu>
    </FlexContainer>
  </StyledHeader>
)

export default Header
