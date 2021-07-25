import Layout from '../components/Layout'
import Section from '../components/Section'
import FeaturedPosts from '../components/FeaturedPosts'
import RecentWork from '../components/RecentWork'

const Index = () => {
  return (
    <Layout>
      <Section bg='yellow'>
        <h1>Hey, I'm Jesse</h1>
        <p>
          I'm a <b>Front-End Developer </b> and I live in New England 🦞.
        </p>
        <p>
          Currently working <b>remotely</b> with a team that{' '}
          <b>champions strong culture</b>.
        </p>
        {/* <p>
          Currently looking for <b>remote work</b> with a team that understands{' '}
          <b>culture is grown</b>, not manufactured.
        </p> */}
        {/* <p>
          View my{' '}
          <a
            href='/docs/jesse-hull-resume-2021.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            2021 resume
          </a>
          .
        </p> */}
      </Section>

      <Section bg='purple'>
        <h2>Featured posts</h2>
        <FeaturedPosts />
      </Section>

      <Section bg='blue'>
        <h2>Recent personal activity</h2>
        <RecentWork data='personal' />
      </Section>
    </Layout>
  )
}

export default Index
