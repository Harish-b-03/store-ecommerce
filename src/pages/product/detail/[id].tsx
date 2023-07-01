import React, {useContext, useState} from 'react'
import Layout from '../../../containers/layout/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ProductType } from '../..'
import { Router, useRouter } from 'next/router'
import { GET_BY_PRODUCT_ID } from '../../../constants'
import { CartContext } from '../../../contexts/Cart/CartProvider'

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


const index:React.FC<{
  product: ProductType
}> = ({ product }) => {
  if(product === null){
    const router = useRouter();
    router.push("/");
  }
  const { addItem, toggleCart } = useContext(CartContext)
  const [quantity, setquantity] = useState(1)
  const [focusImage, setfocusImage] = useState(product.image) // ToDo: make it to handle if it has other than one image
  const images = [ product.image, product.image, product.image, product.image, product.image, product.image ] // simulating array of images

  return (
    <Layout>
      <div className="w-full h-fit flex justify-center items-center">
        <div className='my-20 w-full h-full max-w-6xl flex justify-between items-start'>
          <div className='w-[45%] h-full flex flex-col justify-center items-center'>
            <div className='relative p-10 w-full h-[400px] flex justify-center items-center rounded-2xl bg-slate-100 overflow-hidden'>
              <img
                src={focusImage}
                alt="Product Thumbnail"
                className='h-full object-contain mix-blend-multiply'
              />
            </div>
            {/* <div className='w-full h-1/5 mt-4 relative rounded-2xl flex justify-center items-center'>
                <div
                  className="w-[85%] py-3 flex justify-around items-center bg-slate-100"
                >
                    {
                      images.map((image, index)=>{
                        return(
                          <div key={index} onClick={()=>{setfocusImage(image)}} className='w-[60px] h-[60px] rounded-2xl bg-slate-100 cursor-pointer overflow-hidden'>
                            <img
                              src={image}
                              alt="Product image"
                              className='w-[60px] h-[60px] object-contain mix-blend-multiply'
                            />
                          </div>
                        )
                      })
                    }
                </div>
            </div> */}
          </div>

          <div className='w-[45%] h-fit flex flex-col justify-evenly items'>
            <div className='w-[90%] text-2xl font-semibold'>{product.title}</div>
            <div className='mt-5 text-base font-semibold'>Details:</div>
            <div className='w-[85%] mt-2 text-base break-all text-gray-3a'>{product.description}</div>
            <div className='mt-5 w-full max-w-[200px] flex justify-between items-center'>
              <span className='text-2xl font-semibold text-violet-500'>&#36; {product.price}</span>
              <span className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <span className='ml-1'>
                  {`${product.rating.rate} (${product.rating.count})`}
                </span>
              </span>
              {/* <span className='ml-3 text-[14px] font-inter font-semibold text-black'>{`${product.discountPercentage}% OFF`}</span> */}
            </div>
            <div className='mt-7 flex items-center'>
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
              <button 
                onClick={() => addItem(product, quantity)}
                className='w-5/12 h-[50px] font-semibold text-violet-500 border-[1px] border-violet-500 rounded-md'
              >
                Add to Cart
              </button>
              <button 
                onClick={() => {
                  addItem(product, quantity);
                  toggleCart();
                }}
                className='w-5/12 h-[50px] mr-5 font-semibold text-white bg-violet-500 border-2 border-violet-500 rounded-md'
              >
                Buy Now
              </button>
            </div>
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

  if(context.params !== undefined){
    const res_product = await fetch(`${GET_BY_PRODUCT_ID}/${context.params.id}`);
    const product:ProductType = await res_product.json();

    return {
      props: { product: product }
    }
  }

  return {
    props: { product: null }
  }
}