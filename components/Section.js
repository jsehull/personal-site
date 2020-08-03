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

const Section = ({ id, bg, color, children }) => {
  let bgclr

  if (bg === 'blue') {
    bgclr = theme.colors.blue
  } else if (bg === 'green') {
    bgclr = theme.colors.green
  } else if (bg === 'purple') {
    bgclr = theme.colors.purple
  } else if (bg === 'yellow') {
    bgclr = theme.colors.yellow
  }

  return (
    <StyledSection id={id} bg={bgclr} color={color}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
