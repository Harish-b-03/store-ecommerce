import Image from 'next/image'
import styles from '../assets/styles/Home.module.css'
import Layout from '../containers/layout/Layout'
import { GetServerSideProps, NextPage } from 'next'
import HeroBanner from '../components/HeroBanner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import { GET_ALL_CATEGORIES, GET_BY_CATEGORY, GET_BY_PRODUCT_ID } from '../constants'

export type ProductType = {
  id: number,
  title: string,
  description: string,
  price: number,
  category: string,
  image: string,
  rating: {
    rate: number, 
    count: number
  }
}

export type HomeProps = {
  categories: string[],
  featuredProduct: ProductType,
  bestSellers: {
    "jewelery": ProductType[],
    "electronic": ProductType[],
    "mensClothing": ProductType[],
    "womensClothing": ProductType[]
  }
}

const Home:NextPage<HomeProps> = ({ categories, featuredProduct, bestSellers }) => {
  console.log(featuredProduct, categories)
  return (
    <Layout>
      <HeroBanner featuredProduct={featuredProduct}/>
      <Categories/>
      <BestSellers products={bestSellers}/>
    </Layout>
  )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const res_categories = await fetch(GET_ALL_CATEGORIES);
  const categories:String[] = await res_categories.json();

  const res_featuredProduct = await fetch(`${GET_BY_PRODUCT_ID}/7`);
  const featuredProduct:Object = await res_featuredProduct.json();

  const res_jewelery = await fetch(`${GET_BY_CATEGORY}/jewelery?limit=4`);
  const jewelery:any = await res_jewelery.json();

  const res_electronic = await fetch(`${GET_BY_CATEGORY}/electronics?limit=4`);
  const electronic:any = await res_electronic.json();

  const res_womensDresses = await fetch(`${GET_BY_CATEGORY}/women's clothing?limit=4`);
  const womensDresses:any = await res_womensDresses.json();

  const res_mensDresses = await fetch(`${GET_BY_CATEGORY}/men's clothing?limit=4`);
  const mensDresses:any = await res_mensDresses.json();

  const bestSellers = {
    "jewelery": jewelery,
    "electronic": electronic,
    "mensClothing": mensDresses,
    "womensClothing": womensDresses
  }
  
  
  return { props: {categories, featuredProduct, bestSellers}}
}

export default Home;