import Link from 'next/link'
import styled from '@emotion/styled'
import theme from '../styles/theme'

const AllPostsBox = styled.main`
  margin: 1em auto;

  &:last-child {
    margin-bottom: 0;
  }

  a:hover {
    h3 {
      background: ${theme.colors.blueLines};
    }
  }

  h3 {
    margin: 0 0 0.25em;
    font-style: italic;
  }

  p {
    margin: 0 0 2em;
    &:hover {
      background: none;
    }
  }
`

const EndNote = styled.p`
  &:last-child {
    margin: 4em auto 0;
    text-align: center;
  }
`

const PostList = ({ posts }) => {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>Posts are on the way!</div>}
      <AllPostsBox>
        {posts &&
          posts.map(post => {
            return (
              <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
                <a>
                  <h3>{post.frontmatter.title}</h3>
                  <p>{post.frontmatter.summary}</p>
                </a>
              </Link>
            )
          })}
        <EndNote>I hope you found something you didn't expect :)</EndNote>
      </AllPostsBox>
    </div>
  )
}

export default PostList
