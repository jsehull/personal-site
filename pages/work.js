import Layout from '../components/Layout'
import Section from '../components/Section'
import RecentWork from '../components/RecentWork'

const projects = () => {
  return (
    <Layout pageTitle='Work - Jesse Hull'>
      <Section bg='blue'>
        <h1>Developer Experience</h1>
        <p>
          I have experience working remotely, with agile teams, in agency-like
          settings, and with individual clients.
        </p>
        <p>
          Below are some examples of my <b>open source</b> and{' '}
          <b>professional work</b>.
        </p>
        <p>
          More in-depth activity can be found on my{' '}
          <a
            href='http://github.com/jsehull'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          .
        </p>
      </Section>
      <Section bg='green'>
        <h2>Open source contributions</h2>
        <RecentWork data='oss' />
      </Section>
      <Section bg='blue'>
        <h2>Professional work</h2>
        <RecentWork data='professional' />
      </Section>
    </Layout>
  )
}

export default projects
