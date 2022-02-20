import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>MyShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  )
}

export default Home
