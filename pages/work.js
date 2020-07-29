import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import RecentWork from '../components/RecentWork'

const projects = () => {
  return (
    <>
      <Header />

      <Section bg='lavender'>
        <h2>Developer Experience</h2>
        <RecentWork data='work' />
      </Section>

      <Footer />
    </>
  )
}

export default projects
