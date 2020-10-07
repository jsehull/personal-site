import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import theme from '../../styles/theme'

import Layout from '../../components/Layout'
import Section from '../../components/Section'

const FrontmatterBox = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 0.25em;
  }

  p {
    margin-top: 0;
    font-size: 0.9em;
    font-weight: bold;
  }

  img {
    max-width: 600px;
    width: 100%;
  }
`

const PostBox = styled.div`
  margin: 2em 0 3em;

  h2 {
    margin: 1.25em 0;
    border-bottom: ${theme.misc.dashedTwoPx};
  }

  a {
    font-size: 0.9em;
    font-weight: bold;
  }
`

const PostFooter = styled.div`
  padding: 3em 0 1em;
  border-top: ${theme.misc.solidTwoPx};
`

const BlogPost = ({ siteTitle, frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>

  return (
    <Layout
      pageTitle={`${frontmatter.title} | Jesse Hull`}
      summary={frontmatter.summary}
      banner={frontmatter.banner}
    >
      <Section bg='purple'>
        <article>
          <FrontmatterBox>
            <h1>{frontmatter.title}</h1>
            <p>
              By {frontmatter.author} - {frontmatter.date}
            </p>
            {frontmatter.banner && <img src={frontmatter.banner} />}
          </FrontmatterBox>
          <PostBox>
            <ReactMarkdown source={markdownBody} />
          </PostBox>
        </article>
        <PostFooter>
          <Link href='/blog'>
            <a>View all posts</a>
          </Link>
        </PostFooter>
      </Section>
    </Layout>
  )
}

export default BlogPost

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import('../../siteconfig.json')
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content
    }
  }
}

export async function getStaticPaths() {
  const blogSlugs = (context => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map(slug => `/blog/${slug}`)

  return {
    paths,
    fallback: false
  }
}
