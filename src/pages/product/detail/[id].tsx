import React, {useState} from 'react'
import Layout from '../../../containers/layout/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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

const responsive = {
  xl: {
      breakpoint: {max: 1536, min: 1281},
      items: 3
  },
  lg: {
    breakpoint: { max: 1280, min: 1025 },
    items: 3
  },
  md: {
    breakpoint: { max: 1024, min: 769 },
    items: 3
  },
  sm: {
    breakpoint: { max: 768, min: 641 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};


const index = ({product}:productType) => {
  const [quantity, setquantity] = useState(1)
  const [focusImage, setfocusImage] = useState(product.thumbnail)

  console.log(product)
  return (
    <Layout>
      <div className='w-full h-full flex justify-around items-center'>
        <div className='w-[45%] h-full flex flex-col justify-center items-center'>
          <div className='relative w-full h-3/5 rounded-2xl bg-slate-100'>
            <Image
              src={focusImage}
              alt="Product Thumbnail"
              fill
              className='object-contain transition ease-in-out mix-blend-multiply'
            />
          </div>
          <div className='w-full h-1/5 mt-4 relative rounded-2xl flex justify-center items-center bg-slate-100'>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                customTransition="all 0.7s"
                transitionDuration={500}
                responsive={responsive} 
                renderDotsOutside={true}
                rewind={true}
                className="w-[85%]">
                  {
                    product.images.map((image, index)=>{
                      return(
                        <div key={index} onClick={()=>{setfocusImage(image)}} className='relative w-[100px] h-[130px] rounded-2xl bg-slate-100 cursor-pointer overflow-hidden'>
                          <Image
                            src={image}
                            alt="Product image"
                            fill
                            className='object-contain hover:scale-110 transition ease-in-out mix-blend-multiply'
                          />
                        </div>
                      )
                    })
                  }
              </Carousel>
          </div>
        </div>

        <div className='w-[45%] h-fit flex flex-col justify-evenly items'>
          <div className='w-[90%] text-2xl font-semibold'>{product.title}</div>
          <div className='mt-5 text-base font-semibold'>Details:</div>
          <div className='w-[85%] mt-2 text-base break-all text-gray-3a'>{product.description}</div>
          <div className='mt-5 flex items-center'>
            <span className='text-2xl font-semibold text-violet-500'>{product.price}</span>
            <span className='ml-3 text-[14px] font-inter font-semibold text-black'>{`${product.discountPercentage}% OFF`}</span>
          </div>
          <div className='mt-8 flex items-center'>
            <span className='font-semibold'>Quantity:</span>
            <div className='ml-4 flex'>
              <button onClick={()=>{(quantity-1 > 0 )? setquantity( quantity => quantity - 1): setquantity(1)}} className='w-[40px] h-[40px] text-xl flex justify-center items-center border-[1px] border-gray bg-white'>
                <span className={(quantity === 1)?'text-gray':'text-black'}>-</span>
              </button>
              <div className='w-max min-w-[40px] h-[40px] font-semibold text-lg flex justify-center items-center border-y-[1px] border-y-gray'><span className='mx-2'>{quantity}</span></div>
              <button onClick={()=>{setquantity( quantity => quantity + 1)}} className='w-[40px] h-[40px] text-xl flex justify-center items-center border-[1px] border-gray bg-white'>+</button>
            </div>
          </div>
          <div className='mt-16 w-[90%] flex justify-between items-center'>
            <button className='w-5/12 h-[50px] font-semibold text-violet-500 border-[1px] border-violet-500'>
              Add to Cart
            </button>
            <button className='w-5/12 h-[50px] mr-5 font-semibold text-white bg-violet-500 border-2 border-violet-500'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
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
  
  let productDetail = {}
  if(context.params !== undefined){
    const res_product = await fetch(`https://dummyjson.com/products/${context.params.id}`);
    productDetail = await res_product.json();
  }

  return {
    props: {product: productDetail}
  }
}