import styled from '@emotion/styled'
import { personal, work } from '../data/projects'

const Image = styled.img`
  width: 200px;
`

const RecentWork = ({ data }) => {
  let project
  data === 'personal' ? (project = personal) : (project = work)

  return (
    <>
      {project.map(repo => (
        <div key={repo.id}>
          <h3>{repo.title}</h3>
          <p>{repo.description}</p>
          <a href={repo.codeURL} target='_blank' rel='noopener noreferrer'>
            view code
          </a>
          <Image src={repo.thumbnail} alt={`${repo.title} website`} />
        </div>
      ))}
    </>
  )
}

export default RecentWork
