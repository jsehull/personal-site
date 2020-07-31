import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import RecentWork from '../components/RecentWork'

const Index = () => {
  return (
    <>
      <Head>
        <title>Jesse Hull</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />

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
        <h2>Latest articles</h2>
        <p>coming soon...</p>
      </Section>

      <Section bg='blue'>
        <h2>Recent activity</h2>
        <RecentWork data='personal' />
      </Section>

      <Footer />
    </>
  )
}

export default Index
