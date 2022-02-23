import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Header from '../components/header'
import ProductFeed from '../components/productFeed'

const Home: NextPage = ({ products }: any) => {
  return (
    <div className="">
      <Head>
        <title>MyShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="md:max-w-screen mx-auto ">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}
export async function getServerSideProps(context: any) {
  const products = await fetch('https://fakestoreapi.com/products ').then(
    (res) => res.json()
  )

  return {
    props: {
      products: products,
    },
  }
}

export default Home
