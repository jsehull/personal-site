import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({
  children,
  pageTitle = 'Jesse Hull',
  summary = "Front end developer. Here you'll see some recent projects and be able to read what I'm learning in my professional journey.",
  banner,
  ...props
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={summary} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@jsehull' />
        <meta name='twitter:creator' content='@jsehull' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={summary} />
        <meta
          name='twitter:image:src'
          content={`https://jsehull.com${banner}`}
        />
        <meta name='twitter:image:width' content='600' />
        <meta name='twitter:image:height' content='200' />
        <link rel='icon' href='/images/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
