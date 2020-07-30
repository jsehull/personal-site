import Link from 'next/link'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledHeader = styled.header`
  margin: 0 auto;
  width: 100%;
  background: #c7ffc7;
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
  font-size: 1.3em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 350px) {
    font-size: 1.5em;
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
  padding: 5px;
  font-size: 0.8em;

  @media (min-width: 350px) {
    font-size: 0.9em;
  }
  @media (min-width: 950px) {
    padding: 10px;
    font-size: 1em;
  }
`

const A = styled.a``

const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <Link href='/'>
        <NavLogo>jsehull</NavLogo>
      </Link>
      <NavBar>
        <Li>
          <Link href='/about'>
            <A>About</A>
          </Link>
        </Li>
        <Li>
          <Link href='/work'>
            <A>Work</A>
          </Link>
        </Li>
        <Li>
          <Link href='/blog'>
            <A>Blog</A>
          </Link>
        </Li>
        <Li>
          <Link href='/contact'>
            <A>Contact</A>
          </Link>
        </Li>
      </NavBar>
    </FlexContainer>
  </StyledHeader>
)

export default Header
