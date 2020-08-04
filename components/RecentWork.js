import styled from '@emotion/styled'
import theme from '../styles/theme'
import { personal, professional } from '../data/projects'

const ProjectContainer = styled.div`
  display: ${props => (props.data === 'personal' ? 'flex' : 'block')};
  flex-flow: row wrap;
`

const Project = styled.div`
  margin: 0 auto 30px;
  width: ${props => (props.data === 'personal' ? '350px' : '100%')};

  &:last-child {
    margin-bottom: 0;
  }
`

const Flex = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`

const ImageBox = styled.div`
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: ${props => (props.data === 'personal' ? '100px' : '300px')};
    box-shadow: ${theme.misc.shadow};
  }
`

const TextBox = styled.div`
  flex: ${props => (props.data === 'personal' ? 2 : 1)};
  width: 100%;

  @media (min-width: 700px) {
    p {
      margin-top: 0;
    }
  }
`

const Tags = styled.p`
  font-weight: bold;
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
    <ProjectContainer data={data}>
      {project.map(repo => (
        <Project key={repo.id} data={data}>
          <h3>{repo.name}</h3>
          <Flex>
            <ImageBox data={data}>
              <img src={repo.thumbnail} alt={`${repo.name} website`} />
            </ImageBox>
            <TextBox data={data}>
              {professional ? <Tags>{repo.tags}</Tags> : null}
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
    </ProjectContainer>
  )
}

export default RecentWork
