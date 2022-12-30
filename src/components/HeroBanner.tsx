import Image from "next/image"
type HeroBannerProps = {
    featuredProduct: {
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
    },
}

const HeroBanner:React.FC<HeroBannerProps> = ({ featuredProduct }) => {
  return (
    <div className="w-full h-[50%] mt-10 flex justify-center items-center bg-[rgba(0,0,0,0.06)] relative rounded-[40px]">
        <div className="w-[75%] h-full flex justify-around items-center">
            <div className="w-[60%] h-[90%] py-5 flex flex-col justify-evenly">
                <div className=" font-inter font-semibold text-lg text-violet-500  tracking-widest">{featuredProduct.brand}</div>
                <span className="w-[80%] text-black font-extrabold text-5xl">{featuredProduct.title}</span>
                <span className="w-[80%] text-[rgba(0,0,0,0.5)] font-normal text-lg">{featuredProduct.description}</span>
                <span className="flex items-center">
                    <button className="w-120px h-40px rounded-lg text-white font-semibold bg-violet-500">Shop Now</button>
                    <div className="mx-4 w-fit h-20px flex justify-center items-center"><span className="text-violet-600 m-0 p-0">{featuredProduct.discountPercentage}% OFF</span></div>
                </span>
            </div>
            <div className="w-[400px] h-[300px] relative mix-blend-multiply">
                <Image 
                    src={featuredProduct.thumbnail}
                    alt={featuredProduct.title}
                    fill
                    className="object-contain"
                    />
            </div>
        </div>
    </div>
  )
}

export default HeroBanner