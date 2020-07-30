import styled from '@emotion/styled'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

const Bullets = styled.div`
  display: flex;
  flex-flow: row wrap;

  ul {
    padding-left: 40px;
    width: 150px;
  }
`

const about = () => {
  return (
    <>
      <Header />

      <Section bg='lightyellow'>
        <h1>About me</h1>
        <p>
          I'm a product guy. That means I like to fine-tune ⚖ and craft my work
          with excellence.
        </p>
        <p>Every detail matters to me. 💎</p>
        <p>
          I'm a forever learner 📚 who loves to absorb information from anyone
          and everywhere I can. Growing as an individual is what keeps me
          focused and entertained as I go through life.
        </p>
        <p>
          I've been fortunate enough to have encountered many different life
          experiences, like climbing my first mountains recently 😄. As fellow
          tech-industry folk, we know how valuable balance and perspective is
          away from the screen, so we can think more clearly at it. Mountain air
          be good for ya ha.
        </p>

        <h2>Current skills & workflow</h2>
        <Bullets>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.JS </li>
          </ul>
          <ul>
            <li>UI/UX</li>
            <li>CSS-in-JS</li>
            <li>Sass</li>
            <li>HTML</li>
          </ul>
          <ul>
            <li>Netlify</li>
            <li>GitHub</li>
            <li>Trello</li>
            <li>Slack</li>
          </ul>
          <ul>
            <li>MDN</li>
            <li>Stack Overflow</li>
            <li>OSS repos</li>
          </ul>
          <ul>
            <li>VSCode</li>
            <li>Vim</li>
            <li>GIMP 2</li>
          </ul>
        </Bullets>

        <h2>Toolbelt from previous work</h2>
        <Bullets>
          <ul>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Vagrant</li>
            <li>nginx</li>
          </ul>
          <ul>
            <li>ES5 ha</li>
            <li>jQuery</li>
            <li>AJAX</li>
          </ul>
          <ul>
            <li>Bootstrap</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>PuTTY</li>
          </ul>
          <ul>
            <li>Bitbucket</li>
            <li>Firebase</li>
          </ul>
          <ul>
            <li>Bower</li>
            <li>Grunt</li>
            <li>Gulp</li>
          </ul>
          <ul>
            <li>Sublime</li>
            <li>HipChat</li>
          </ul>
        </Bullets>
      </Section>

      <Footer />
    </>
  )
}

export default about
