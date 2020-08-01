import Link from 'next/link'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledHeader = styled.header`
  margin: 0 auto;
  width: 100%;
  background: ${theme.colors.green};

  a {
    font-weight: bold;
    border-bottom: none;
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

  &:hover {
    cursor: pointer;
    border-bottom: none;
  }
`

const NavBar = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  list-style: none;
`

const Li = styled.li`
  margin: 0;
  margin-right: 10px;
  padding: 5px 7px;
  font-size: 0.8em;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: ${theme.misc.solidTwoPx};
    background: ${theme.colors.blueMedium};
  }

  &:first-child {
    background: ${theme.colors.yellow};
  }

  &:nth-child(2) {
    background: ${theme.colors.blueLight};
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

  a:hover {
    background: transparent;
  }
`

const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <Link href='/'>
        <NavLogo>jsehull</NavLogo>
      </Link>
      <NavBar>
        <Link href='/about'>
          <Li>
            <a>About</a>
          </Li>
        </Link>
        <Link href='/work'>
          <Li>
            <a>Work</a>
          </Li>
        </Link>
        <Link href='/blog'>
          <Li>
            <a>Blog</a>
          </Li>
        </Link>
      </NavBar>
    </FlexContainer>
  </StyledHeader>
)

export default Header
