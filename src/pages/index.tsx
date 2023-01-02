import Image from 'next/image'
import styles from '../assets/styles/Home.module.css'
import Layout from '../containers/layout/Layout'
import { GetServerSideProps, NextPage } from 'next'
import HeroBanner from '../components/HeroBanner'
import Categories from '../components/Categories'

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
      <HeroBanner featuredProduct={featuredProduct}/>
      <Categories/>
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