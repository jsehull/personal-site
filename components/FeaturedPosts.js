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
      <a href='/blog/overcoming-my-fear-of-the-green-squares-overlord'>
        <h3>Overcoming My Fear of the Green Squares Overlord</h3>
      </a>
      <a href='/blog/my-simple-case-for-standard-js'>
        <h3>My Simple Case for Standard JS</h3>
      </a>
      <a href='/blog/writing-for-an-audience-of-one'>
        <h3>Writing for an Audience of One</h3>
      </a>
    </PostBox>
  )
}

export default FeaturedPosts
