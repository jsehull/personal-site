import Head from 'next/head'

const Layout = ({
  children,
  pageTitle = 'Jesse Hull',
  summary = 'Frontend developer. IBM. Remote.'
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/images/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      {children}
    </>
  )
}

export default Layout
