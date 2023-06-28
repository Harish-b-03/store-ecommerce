import Image from "next/image"
import { ProductType } from "../pages"
import { useState } from "react"
import FavouriteIcon from "../assets/icons/FavouriteIcon"

const ProductCard:React.FC<
    {
        product: ProductType
    }
> = ({ product }) => {
    const [showOptions, setShowOptions] = useState(false);

  return (
    <div
        onMouseEnter={()=>setShowOptions(true)}
        onMouseLeave={()=>setShowOptions(false)} 
        className="relative w-[230px] h-72 flex flex-col justify-start items-center rounded-md overflow-hidden cursor-pointer"
    >
        <div className="relative p-8 w-full h-[230px] flex justify-center items-center border border-gray-200 rounded-md overflow-hidden">
            <div className="h-[200px] overflow-clip">
                <img
                    src={product.image}
                    alt={product.title}
                    className='h-full object-contain'
                />
            </div>

            <div className={`h-full absolute top-[1px] ${(showOptions)?'right-[1px]':'-right-full scale-0 pointer-events-none opacity-0'}  text-gray-500 flex flex-col justify-between items-center overflow-hidden transition-all duration-300`}>
                <div className="my-2 p-2 text-black bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-800 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div className="px-1 py-4 space-y-2 flex flex-col justify-center items-center bg-gray-200 bg-opacity-40 rounded-tl-md overflow-hidden transition-all duration-300">
                    <div>
                        <FavouriteIcon width="26px" height="26px" className="m-1.5 fill-gray-500 hover:fill-violet-700"/>
                    </div>
                    <div className="text-xs flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <span className="ml-0.5">
                            {product.rating.rate.toPrecision(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-3 w-full">
            <div className="mt-3 w-full text-gray-700 line-clamp-1">
                {product.title}
            </div>
            <div className="mt-2 w-full flex justify-between items-center">
                <div className="font-semibold">
                    &#36; {product.price}
                </div>
                {/* <div className="ml-1 text-sm text-gray-500 flex justify-center items-center">
                    {"("}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span className="ml-0.5">
                        {product.rating.rate.toPrecision(2)}
                    </span>
                    {")"}
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ProductCard