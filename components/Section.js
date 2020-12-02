import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledSection = styled.section`
  width: 100%;
  background: ${props => props.bg};
  color: ${props => props.color};
`

const Container = styled.div`
  margin: 0 auto;
  padding: 3em 1em;
  max-width: ${theme.misc.widthDesktop};
`

// bg    = background color
// color = text color
const Section = ({ id, bg, color, children }) => {
  let bgColor

  // backgrounds color coded to match <Header /> NavMenu buttons
  if (bg === 'blue') {
    bgColor = theme.colors.blue // dev area
  } else if (bg === 'green') {
    bgColor = theme.colors.green // menu/'other' area
  } else if (bg === 'purple') {
    bgColor = theme.colors.purple // blog area
  } else if (bg === 'yellow') {
    bgColor = theme.colors.yellow // about/my voice area
  }

  return (
    <StyledSection id={id} bg={bgColor} color={color}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
