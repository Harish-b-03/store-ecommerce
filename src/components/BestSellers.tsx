import Image from 'next/image'
import React from 'react'
import { HomeProps } from '../pages'

type BestSellersProps = {
    products: HomeProps["bestSellers"]
}

const BestSellers:React.FC<BestSellersProps> = ({products}) => {

  return (
    <div className='my-10 text-black'>

        <div className='text-xl font-bold text-black tracking-wider'>Best Sellers</div>

        <div className='my-6 px-20 w-full'>
            <div className='my-10 w-full overflow-scroll flex justify-between items-center'>
                {
                    products.jewelery.map((product)=> {
                        return(
                            <div key={product.id} className=''>
                                {/* <div>{product.title}</div> */}
                                <div className='mr-8 w-[200px] h-[200px] relative'>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        priority
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        ) })
                }
            </div>
            <div className='my-10 w-full overflow-scroll flex justify-between items-center'>
                {
                    products.mensClothing.map((product)=> {
                        return(
                            <div key={product.id} className=''>
                                {/* <div>{product.title}</div> */}
                                <div className='mr-8 w-[200px] h-[200px] relative'>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        priority
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        ) })
                }
            </div>
            <div className='my-10 w-full overflow-scroll flex justify-between items-center'>
                {
                    products.womensClothing.map((product)=> {
                        return(
                            <div key={product.id} className=''>
                                {/* <div>{product.title}</div> */}
                                <div className='mr-8 w-[200px] h-[200px] relative'>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        priority
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        ) })
                }
            </div>
        </div>
    </div>
  )
}

export default BestSellers