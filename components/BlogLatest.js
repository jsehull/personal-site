import styled from '@emotion/styled'

const Title = styled.h3`
  font-style: italic;

  &:last-child {
    margin-bottom: 0;
  }
`

const BlogLatest = () => {
  return (
    <>
      <Title>Writing for an Audience of One</Title>
      <Title>A Simple Case for Standard JS</Title>
      <Title>Writing for an Audience of One</Title>
    </>
  )
}

export default BlogLatest
