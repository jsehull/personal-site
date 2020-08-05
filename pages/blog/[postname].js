import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import theme from '../../styles/theme'

import Layout from '../../components/Layout'
import Section from '../../components/Section'

const FrontmatterBox = styled.div`
  p {
    margin-top: 0;
  }
`

const PostBox = styled.div`
  margin: 2em 0 3em;
`

const PostFooter = styled.div`
  padding: 3em 0 1em;
  border-top: ${theme.misc.solidTwoPx};
`

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Section bg='purple'>
        <article>
          <FrontmatterBox>
            <h1>{frontmatter.title}</h1>
            <p>
              By {frontmatter.author} - {frontmatter.publishedOn}
            </p>
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

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
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
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

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

// const SummaryBox = styled.div`
//   margin: 2em auto;

//   &:last-child {
//     margin-bottom: 0;
//   }

//   h3 {
//     margin: 0 0 0.75em;
//     font-style: italic;
//   }
// `

//       <Section bg='purple'>
//         <h2>All posts</h2>
//         <SummaryBox>
//           <h3>The WET Codebase</h3>
//           <p>July 13, 2020 • ☕️ 1 min read</p>
//           <p>Come waste your time with me.</p>
//         </SummaryBox>
//         <SummaryBox>
//           <h3>The WET Codebase</h3>
//           <p>July 13, 2020 • ☕️ 1 min read</p>
//           <p>Come waste your time with me.</p>
//         </SummaryBox>
//       </Section>
