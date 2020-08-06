import styled from '@emotion/styled'
import theme from '../styles/theme'

const PostBox = styled.div`
  font-style: italic;

  a:hover {
    h3 {
      background: ${theme.colors.blueLines};
    }
  }

  h3:last-child {
    margin-bottom: 0;
  }
`

const FeaturedPosts = () => {
  return (
    <PostBox>
      <a href='/blog/hello-world'>
        <h3>Hello World</h3>
      </a>
      <a href='/blog/writing-for-an-audience-of-one'>
        <h3>Writing for an Audience of One</h3>
      </a>
      <h3>TBD - A Simple Case for Standard JS</h3>
    </PostBox>
  )
}

export default FeaturedPosts
