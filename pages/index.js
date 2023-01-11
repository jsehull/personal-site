import styled from '@emotion/styled'
import theme from '../styles/theme'
import Layout from '../components/Layout'

const PageContainer = styled.section`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-flow: column;
  max-width: 350px;
  height: 100vh;

  p {
    margin: 0 0 1.25em;
    padding-left: 10px;
    font-style: italic;
    border-bottom: 2px dashed rgb(173, 216, 230);
  }
`

const Header = styled.h1`
  margin: 0 0 20px;
  padding-left: 10px;
`

const IconContainer = styled.div`
  margin-bottom: 1.25em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px dashed rgb(173, 216, 230);

  a {
    margin: -5px 8px -3px;
    border: none;

    &:hover {
      background: none;

      svg {
        fill: ${theme.colors.blueLines};
      }
    }
  }
`
const FillerLines = styled.p`
  height: 21px;
  border-bottom: 2px dashed rgb(173, 216, 230);
`

const Index = () => {
  return (
    <Layout>
      <PageContainer>
        <Header>Jesse Hull</Header>
        <p>
          <b>Frontend Developer</b> at <b>IBM Consulting</b>
        </p>
        <p>
          Working <b>remotely</b> out of North Carolina ✈️
        </p>
        <FillerLines></FillerLines>
        <FillerLines></FillerLines>

        <IconContainer>
          <a
            href='http://github.com/jsehull'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              title='GitHub'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
            </svg>
          </a>
          <a
            href='https://www.linkedin.com/in/jsehull/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              title='LinkedIn'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
              <rect x='2' y='9' width='4' height='12' />
              <circle cx='4' cy='4' r='2' />
            </svg>
          </a>
          <a href='mailto:jse.hull@gmail.com'>
            <svg
              title='email'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
              <polyline points='22,6 12,13 2,6' />
            </svg>
          </a>
        </IconContainer>

        <FillerLines></FillerLines>
        <FillerLines></FillerLines>
      </PageContainer>
    </Layout>
  )
}

export default Index
