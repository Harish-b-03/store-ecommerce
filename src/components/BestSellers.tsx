import Image from 'next/image'
import React from 'react'
import { ResultObject } from '../pages'

type BestSellersProps = {
    products: {
        "Tops": ResultObject[],
        "MensShirt": ResultObject[],
        "WomensDresses": ResultObject[],
      },
}

const BestSellers:React.FC<BestSellersProps> = ({products}) => {
  return (
    <div className='my-10 text-black'>

        <div className='text-xl font-bold text-black tracking-wider'>Best Sellers</div>

        <div className='my-6 w-full'>
            <div className='my-10 w-full overflow-scroll flex justify-between items-center'>
                {
                    products.Tops.map((product)=> {
                        return(
                            <div key={product.id} className=''>
                                {/* <div>{product.title}</div> */}
                                <div className='mr-8 w-[200px] h-[200px] relative'>
                                    <Image
                                        src={product.images[0]}
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
                    products.MensShirt.map((product)=> {
                        return(
                            <div key={product.id} className=''>
                                {/* <div>{product.title}</div> */}
                                <div className='mr-8 w-[200px] h-[200px] relative'>
                                    <Image
                                        src={product.images[0]}
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
                    products.WomensDresses.map((product)=> {
                        return(
                            <div key={product.id} className=''>
                                {/* <div>{product.title}</div> */}
                                <div className='mr-8 w-[200px] h-[200px] relative'>
                                    <Image
                                        src={product.images[0]}
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