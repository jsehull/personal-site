import Layout from '../components/Layout'
import Section from '../components/Section'
import RecentWork from '../components/RecentWork'

const projects = () => {
  return (
    <Layout pageTitle='Work - Jesse Hull'>
      <Section bg='blue'>
        <h1>Developer Experience</h1>
        <RecentWork data='work' />
      </Section>
    </Layout>
  )
}

export default projects
