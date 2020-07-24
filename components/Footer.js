import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: coral;
  text-align: center;

  div {
    display: flex;
    align-items: center;
  }

  a,
  p {
    margin: 10px;
  }

  img {
    width: 40px;
  }
`

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href='mailto:example@example.com'>example@example.com</a>
        <a
          href='http://github.com/jsehull'
          target='_blank'
          rel='noopener noreferrer'>
          <img src='/images/github.png' alt='GitHub' />
        </a>
        <p>{currentYear}</p>
      </div>
    </StyledFooter>
  )
}

export default Footer
