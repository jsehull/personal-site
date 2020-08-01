import styled from '@emotion/styled'
import theme from '../styles/theme'
import { personal, professional } from '../data/projects'

const Project = styled.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Flex = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
  }
`

const TextBox = styled.div`
  flex: 1;
  width: 100%;

  @media (min-width: 700px) {
    p {
      margin-top: 0;
    }
  }
`

const LinkBox = styled.div`
  a {
    &:first-child {
      margin-right: 30px;
    }
  }
`

const RecentWork = ({ data }) => {
  let project
  data === 'personal' ? (project = personal) : (project = professional)

  return (
    <>
      {project.map(repo => (
        <Project key={repo.id}>
          <h3>{repo.title}</h3>
          <Flex>
            <ImageBox>
              <img src={repo.thumbnail} alt={`${repo.title} website`} />
            </ImageBox>
            <TextBox>
              <p>{repo.description}</p>
              <LinkBox>
                {repo.siteURL ? (
                  <a
                    href={repo.siteURL}
                    target='_blank'
                    rel='noopener noreferrer'>
                    view LIVE
                  </a>
                ) : null}
                {repo.codeURL ? (
                  <a
                    href={repo.codeURL}
                    target='_blank'
                    rel='noopener noreferrer'>
                    view CODE
                  </a>
                ) : null}
              </LinkBox>
            </TextBox>
          </Flex>
        </Project>
      ))}
    </>
  )
}

export default RecentWork
