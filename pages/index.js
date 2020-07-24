import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Static Starter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Section bg='lavender'>
        <h1>Welcome Page</h1>
        <p>
          Can we have another option I like it, but can the snow look a little
          warmer, yet can you make it look like this clipart i found nor can the
          black be darker. There are more projects lined up charge extra the
          next time I really like the colour but can you change it, yet can you
          make the logo bigger yes bigger bigger still the logo is too big but
          could you rotate the picture to show the other side of the room?. I
          know you've made thirty iterations but can we go back to the first one
          that was the best version there is too much white space for we are a
          big name to have in your portfolio.
        </p>
      </Section>

      <Footer />
    </>
  )
}
