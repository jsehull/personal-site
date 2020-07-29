import styled from '@emotion/styled'
import theme from '../styles/theme'

const StyledSection = styled.section`
  width: 100%;
  background: ${props => props.bg};
  color: ${props => props.color};
`

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 15px;
  max-width: ${theme.width.desktop};
`

const Section = ({ id, bg, color, children }) => {
  return (
    <StyledSection id={id} bg={bg} color={color}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
