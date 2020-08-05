import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Section from '../components/Section'
import theme from '../styles/theme'

const Bullets = styled.div`
  display: flex;
  flex-flow: row wrap;

  ul {
    margin-top: 0;
    padding-left: 40px;
    width: 150px;
  }
`

const Article = styled.article`
  margin: 30px 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const TextBox = styled.div`
  padding-left: 20px;
  border-left: 8px solid ${theme.colors.blueLines};

  p {
    font-style: italic;
  }
`

const about = () => {
  return (
    <Layout title='About - Jesse Hull'>
      <Section bg='yellow'>
        <Article>
          <h1>About me</h1>
          <p>
            I'm a product guy. That means I like to fine-tune ⚖ and craft{' '}
            <a href='/work'>my work</a> with excellence.
          </p>
          <p>Every detail matters to me 💎.</p>
          <p>
            I'm a forever learner 📚 who loves to absorb information from anyone
            and everywhere I can. Growing as an individual is what keeps me
            focused and entertained as I go through life.
          </p>
          <p>
            I've been fortunate enough to have encountered many different life
            experiences, like climbing my first mountains recently 😄. As fellow
            tech-industry folk, we know how valuable balance and perspective is
            away from the screen, so we can think more clearly at it. Mountain
            air be good for ya ha.
          </p>
          <p>
            More on my{' '}
            <a
              href='/docs/jesse-hull-resume-2020.pdf'
              target='_blank'
              rel='noopener noreferrer'>
              resume
            </a>
            .
          </p>
        </Article>

        <Article>
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
              <li>OSS repos</li>
              <li>Stack Overflow</li>
            </ul>
            <ul>
              <li>VSCode</li>
              <li>Vim</li>
              <li>GIMP 2</li>
            </ul>
          </Bullets>
        </Article>

        <Article>
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
        </Article>

        <Article>
          <h2>Site inspiration 📝</h2>
          <p>
            This website is based off memories from my elementary school days.
          </p>
          <p>
            I always loved the colorful pages we got for notes and scratch paper
            and never wanted to waste any space. Since I was younger, I've
            always written small and filled up my paper until it was all used!
          </p>
          <p>
            It feels like my own drawing board with my own notes and ideas
            everywhere.
          </p>
          <p>More in-depth blog otw...</p>
        </Article>
      </Section>
    </Layout>
  )
}

export default about
