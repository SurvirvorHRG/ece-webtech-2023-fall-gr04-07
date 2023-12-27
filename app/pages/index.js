import Link from 'next/link'
import Layout from '../components/Layout.js'
import Featured from '../components/featured/Featured.js'
import CategoryList from '../components/categoryList/CategoryList.js'
import CardList from "../components/cardList/CardList.js";
import Menu from "../components/Menu/Menu.js";


export const getServerSideProps = async (ctx) => {
  const page = parseInt(ctx.query.page) || 1
  const cat = ctx.query.cat || ""
  const response_cat = await fetch(`https://ece-webtech-2023-fall-gr04-07.vercel.app/api/categories`)
  const response_articles = await fetch(`https://ece-webtech-2023-fall-gr04-07.vercel.app/api/articles?page=${page}&cat=${cat}`)
  const articles = await response_articles.json()
  const categories = await response_cat.json()

  return {
    props: {
      articles: articles,
      categories: categories,
      page: page,
      cat: cat
    }
  }
}

export default function Page(props) {
  return (
    <Layout
      title=""
      description="Generated by create next app"
    >
      <div className="">
        <Featured />
        <CategoryList {...props} />
        <div className="flex gap-[50px]">
          <CardList {...props} />
          <Menu />
        </div>
      </div>
    </Layout>
  )
}
