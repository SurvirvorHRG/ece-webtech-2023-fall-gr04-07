import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { ThemeContextProvider } from './Theme/ThemeContext.js'
import ThemeProvider from './Theme/ThemeProvider.js'
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
export default function Layout({
  children,
  title,
  description
}) {
  return (
    <>
      <Head>
        <title>{`WebTechApp ${title && `- ${title}`}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
