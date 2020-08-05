import Layout from '../components/Layout'
import Section from '../components/Section'

const blog = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <Section bg='yellow'>
        <h1>Welcome to my blog</h1>
        <p>{description} </p>
        <p>
          Not all technical in nature. Some industry, some creative, some
          business, some miscellaneous.
        </p>
        <p>My goal is for the words here to inspire us both 😄.</p>
      </Section>
      <Section bg='purple'>
        <h2>All posts</h2>
        <main>posts go here</main>
      </Section>
    </Layout>
  )
}

export default blog

export async function getStaticProps() {
  const configData = await import('../siteconfig.json')

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  }
}
