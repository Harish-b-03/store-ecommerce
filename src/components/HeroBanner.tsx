import Image from "next/image";
import { ProductType } from "../pages";
import { useContext } from "react";
import { CartContext } from "../contexts/Cart/CartProvider";
import Link from "next/link";

type HeroBannerProps = {
	featuredProduct: ProductType;
};

const HeroBanner: React.FC<HeroBannerProps> = ({ featuredProduct }) => {
	const { buyItem } = useContext(CartContext);

	return (
		<Link
			href={`/product/detail/${featuredProduct.id}`}
			passHref
			className="px-7 py-1 w-full h-fit max-h-[400px] md:max-h-[600px] md:h-[50vh] mt-8 flex justify-center items-center bg-[rgba(0,0,0,0.04)] relative rounded-[40px] overflow-hidden cursor-pointer"
		>
			<div className="w-full md:w-[85%] lg:w-[75%] h-fit md:h-full flex justify-between md:justify-around items-center">
				<div className="w-2/3 h-fit min-h-[250px] md:w-[60%] md:h-[70%] md:min-h-[500px] py-5 flex flex-col justify-center">
					{/* <div className="font-inter font-semibold text-lg text-violet-500  tracking-widest">{featuredProduct.brand}</div> */}
					<span className="md:w-[80%] md:mt-2 text-black font-extrabold text-xl md:text-2xl lg:text-3xl 2xl:text-5xl">
						{featuredProduct.title}
					</span>
					<span className="md:w-[80%] mt-2 md:mt-4 text-[rgba(0,0,0,0.5)] font-normal text-sm md:text-base 2xl:text-lg line-clamp-2">
						{featuredProduct.description}
					</span>
					<span className="mt-5 md:mt-8 flex items-center">
						<button
							onClick={(e) => {
								e.preventDefault();
								buyItem(featuredProduct);
							}}
							className="px-4 py-1.5 md:px-6 md:py-2.5 text-sm md:text-base rounded-lg text-white font-semibold bg-violet-500"
						>
							Shop Now
						</button>
						{/* <div className="mx-4 w-fit h-20px text-sm font-inter flex justify-center items-center"><span className="text-violet-600 m-0 p-0">{Math.floor(Math.random() * 25) + 10}% OFF</span></div> */}
					</span>
				</div>
				<div className="ml-5 md:mx-0 w-1/3 h-[130px] md:w-[40%] max-w-[400px] md:h-[250px] relative mix-blend-multiply ">
					<Image
						src={featuredProduct.image}
						alt={featuredProduct.title}
						fill
						priority
						className="aspect-square object-contain"
					/>
				</div>
			</div>
		</Link>
	);
};

export default HeroBanner;
