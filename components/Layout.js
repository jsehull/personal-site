import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title = 'Jesse Hull' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/images/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default Layout
