import Head from 'next/head'
import Image from 'next/image'
import styles from '../assets/styles/Home.module.css'
import Layout from '../containers/layout/Layout'
import { GetServerSideProps, NextPage } from 'next'
import HeroBanner from '../components/HeroBanner'

type HomeProps = {
  categories: string[],
  featuredProduct: {
    id: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    discountPercentage: number,
    images: string[],
    rating: number,
    stock: number,
    thumbnail: string,
},
}

const Home:NextPage<HomeProps> = ({ categories, featuredProduct }) => {
  return (
    <Layout>
      <Head>
        <title>Store. </title>
        <meta name="description" content="Store E-Commerce site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lekton&display=swap" rel="stylesheet"></link>
      </Head>
      <HeroBanner featuredProduct={featuredProduct}/>
      <div>
        {/* {
          categories.map((category)=> {return <div key={category}>{category}</div>})
        } */}
      </div>
    </Layout>
  )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const res_categories = await fetch("https://dummyjson.com/products/categories");
  const categories:String[] = await res_categories.json();

  const res_featuredProduct = await fetch("https://dummyjson.com/products/100"); // 8, 12, 13. 15, 53, 60, 61, 62
  const featuredProduct:Object = await res_featuredProduct.json();

  return { props: {categories, featuredProduct}}
}

export default Home;