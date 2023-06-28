import Image from 'next/image'
import styles from '../assets/styles/Home.module.css'
import Layout from '../containers/layout/Layout'
import { GetServerSideProps, NextPage } from 'next'
import HeroBanner from '../components/HeroBanner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'

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
  const res_categories = await fetch("https://fakestoreapi.com/products/categories");
  const categories:String[] = await res_categories.json();

  const res_featuredProduct = await fetch("https://fakestoreapi.com/products/7");
  const featuredProduct:Object = await res_featuredProduct.json();

  const res_jewelery = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=4");
  const jewelery:any = await res_jewelery.json();

  const res_electronic = await fetch("https://fakestoreapi.com/products/category/electronics?limit=4");
  const electronic:any = await res_electronic.json();

  const res_womensDresses = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4");
  const womensDresses:any = await res_womensDresses.json();

  const res_mensDresses = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4");
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