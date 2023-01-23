import Image from 'next/image'
import styles from '../assets/styles/Home.module.css'
import Layout from '../containers/layout/Layout'
import { GetServerSideProps, NextPage } from 'next'
import HeroBanner from '../components/HeroBanner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'

export type ResultObject = {
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
}

type HomeProps = {
  categories: string[],
  featuredProduct: ResultObject,
  bestSeller_products: {
    "Tops": ResultObject[],
    "MensShirt": ResultObject[],
    "WomensDresses": ResultObject[],
  },
}

const Home:NextPage<HomeProps> = ({ categories, featuredProduct, bestSeller_products }) => {
  console.log(bestSeller_products)
  return (
    <Layout>
      <HeroBanner featuredProduct={featuredProduct}/>
      <Categories/>
      <BestSellers products={bestSeller_products}/>
    </Layout>
  )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const res_categories = await fetch("https://dummyjson.com/products/categories");
  const categories:String[] = await res_categories.json();

  const res_featuredProduct = await fetch("https://dummyjson.com/products/100"); // 8, 12, 13. 15, 53, 60, 61, 62
  const featuredProduct:Object = await res_featuredProduct.json();

  const res_tops = await fetch("https://dummyjson.com/products/category/tops");
  const tops:any = await res_tops.json();

  const res_mensShirt = await fetch("https://dummyjson.com/products/category/mens-shirts");
  const mensShirt:any = await res_mensShirt.json();

  const res_womensDresses = await fetch("https://dummyjson.com/products/category/womens-dresses");
  const womensDresses:any = await res_womensDresses.json();

  const bestSeller_products = {
    "Tops": tops.products,
    "MensShirt": mensShirt.products,
    "WomensDresses": womensDresses.products,
  }

  return { props: {categories, featuredProduct, bestSeller_products}}
}

export default Home;