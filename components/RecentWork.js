import styled from '@emotion/styled'
import { personal, work } from '../data/projects'

const Image = styled.img`
  width: 200px;
`

const RecentWork = data => {
  data === 'work' ? (data = personal) : (data = work)

  return (
    <>
      {data.map(repo => (
        <div key={repo.id}>
          <h3>{repo.title}</h3>
          <p>{repo.description}</p>
          <a href={repo.url} target='_blank' rel='noopener noreferrer'>
            visit repository
          </a>
          <Image src={repo.thumbnail} alt={`${repo.title} website`} />
        </div>
      ))}
    </>
  )
}

export default RecentWork

// v3 REST vs v4 GraphQL??

// useEffect(() => {
//   fetch('https://api.github.com/users/jsehull/repos')
//     .then(response => response.json())
//     .then(data => setRepos(data))

// }, [])

// const repoArr = repos.map(repo => {
//   if(repo.private === false) {
//     return `
//       <div>
//         <h3>${repo.name}</h3>
//         <p>${repo.description}</p>
//       </div>
//     `
//   }
// })
