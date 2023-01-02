import React from 'react'
import Layout from '../../../containers/layout/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'

type productType = {
  product:{ string: {
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
  }[]}
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
  const paths = ["Clothing", "Gadgets", "Accessories", "Groceries"].map((category)=>({
    params: {category: category}
  }));

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
    
    console.log(context)
    
    if(context.params !== undefined){
    
    let productDetail:Array<{"category":string, "products":object}> = [];
    let subCategories:string[] = []

    switch(context.params.category){ // grouping all categories provided by API into main 4 Categories (Clothing, Gadgets, Accessories, Groceries)
        case "Clothing": 
            subCategories = ["tops", "womens-dresses", "womens-shoes", "mens-shirts",];
            break;
        case "Gadgets": 
            subCategories = ["smartphones", "laptops"];
            break;
        case "Accessories": 
            subCategories = ["fragrances", "skincare", "home-decorations", "furniture", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"];
            break;
        case "Groceries": 
            subCategories = ["groceries"];
            break;
        default: 
            subCategories = []; 
            break;
    }

    let response;
    let data;

    for(let i=0; i<subCategories.length;i++){
        response = await fetch(`https://dummyjson.com/products/category/${subCategories[i]}`);
        data = await response.json();
        productDetail.push({"category":subCategories[i], "products":data.products});
    }

    // console.log(productDetail)
    return {
      props: {product: productDetail}
    }
  }

  return{
    redirect : {
        destination: "/",
        permanent: true
    }
  }
}