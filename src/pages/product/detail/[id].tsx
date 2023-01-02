import React from 'react'
import Layout from '../../../containers/layout/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'

type productType = {
  product: {
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
}

const index = ({product}:productType) => {
  console.log(product)
  return (
    <Layout>
      <div>product</div>
    </Layout>
  )
}

export default index

export const getStaticPaths: GetStaticPaths =async () => {
  const paths = ["1", "2", "3", "4", "5"].map((id)=>({
    params: {id: id}
  }));

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context.params)
  let productDetail = {}
  if(context.params !== undefined){
    const res_product = await fetch(`https://dummyjson.com/products/${context.params.id}`);
    productDetail = await res_product.json();
  }

  return {
    props: {product: productDetail}
  }
}