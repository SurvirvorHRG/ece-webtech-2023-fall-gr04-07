import Layout from '../../components/Layout.js'

export default function Page({
  article
}) {
  return (
    <Layout
      >Single Article

      <div className="">
        <div classNameee = "">
          <div classNameee = ""> 
            <div classNameee = ""></div>
          </div> 
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  // const response = await fetch(`http://localhost:3000/api/articles/${ctx.params.slug}`)
  // const article = await response.json()
  const article = {}
  return {
    props: {
      article: article
    }
  };
}

export async function getStaticPaths(ctx) {
  // const response = await fetch(`http://localhost:3000/api/articles`)
  // const articles = await response.json()
  const articles = []
  return {
    paths: articles.map( article => `/articles/${article.slug}`),
    fallback: false
  };
}
