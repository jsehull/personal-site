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
      </Head>

      <Header />

      <Section bg='lavender'>
        <h1>Hey, I'm Jesse.</h1>
        <p>I'm a Front-End Developer and I live in Colorado.</p>
      </Section>

      <Section bg='lightcyan'>
        <h2>Recent Activity</h2>
        <RecentWork data='personal' />
      </Section>

      <Footer />
    </>
  )
}

export default Index
