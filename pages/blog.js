import matter from 'gray-matter'
import Layout from '../components/Layout'
import Section from '../components/Section'
import PostList from '../components/PostList'

const blog = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <Section bg='yellow'>
        <h1>My Blog 📝</h1>
        <p>{description} </p>
        <p>My goal is for the words here to inspire us both.</p>
        <p>Not all development in nature.</p>
        <p> Some industry, some personal, some business, some miscellaneous.</p>
      </Section>

      <Section bg='purple'>
        <h2>All posts</h2>
        <PostList posts={posts} />
      </Section>
    </Layout>
  )
}

export default blog

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json')

  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description
    }
  }
}
