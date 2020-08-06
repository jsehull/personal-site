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
          I'm a <b>Front-End Developer</b> and I live in Colorado 🏔.
        </p>
        <p>
          Currently looking for <b>remote work</b> with a team that understands{' '}
          <b>culture is grown</b>, not manufactured.
        </p>
      </Section>

      <Section bg='purple'>
        <h2>Featured posts</h2>
        <FeaturedPosts />
      </Section>

      <Section bg='blue'>
        <h2>Recent activity</h2>
        <RecentWork data='personal' />
      </Section>
    </Layout>
  )
}

export default Index
