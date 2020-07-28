import Link from 'next/link'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  margin: 0 auto;
  width: 100%;
  background: coral;
`

const FlexContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;

  @media (min-width: 950px) {
    padding: 10px 25px;
    flex-direction: row;
  }
`
const NavLogo = styled.a`
  margin: 10px 0;
  font-size: 1.5em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 50px;
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
  margin: 5px;
  font-size: 0.9em;

  @media (min-width: 950px) {
    margin: 10px;
    font-size: 1em;
  }
`

const A = styled.a`
  &:hover {
    text-decoration: underline;
  }
`

const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <Link href='/'>
        <NavLogo>Jesse Hull</NavLogo>
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
