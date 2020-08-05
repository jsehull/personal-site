import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Section from '../components/Section'

const SummaryBox = styled.div`
  margin: 2em auto;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin: 0 0 0.75em;
    font-style: italic;
  }
`

const blog = () => {
  return (
    <Layout title='Blog - Jesse Hull'>
      <Section bg='yellow'>
        <h1>Welcome to my blog</h1>
        <p>
          Here you will find parts of my developer and personal journey. Some
          posts are of general thoughts, victories had, and hard lessons
          learned.
        </p>
        <p>
          Not all technical in nature. Some industry, some creative, some
          business, some miscellaneous.
        </p>
        <p>My goal is for the words here to inspire us both 😄.</p>
      </Section>
      <Section bg='purple'>
        <h2>All posts</h2>
        <SummaryBox>
          <h3>The WET Codebase</h3>
          <p>July 13, 2020 • ☕️ 1 min read</p>
          <p>Come waste your time with me.</p>
        </SummaryBox>
        <SummaryBox>
          <h3>The WET Codebase</h3>
          <p>July 13, 2020 • ☕️ 1 min read</p>
          <p>Come waste your time with me.</p>
        </SummaryBox>
      </Section>
    </Layout>
  )
}

export default blog
