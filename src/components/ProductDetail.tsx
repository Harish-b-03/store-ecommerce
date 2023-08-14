import { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart/CartProvider";
import { ProductType } from "../pages";
import StarIcon from "./icons/StarIcon";
import BuyNowButton from "./BuyNowButton";

const ProductDetail = ({ product }: { product: ProductType }) => {
    const { addItem } = useContext(CartContext);
    const [quantity, setquantity] = useState(1);

    return (
        <div className="mt-10 md:mt-0 px-5 md:px-0 w-full md:w-[45%] h-fit flex flex-col justify-evenly items-center md:items-start">
            <div className="md:w-[90%] text-2xl text-center md:text-left font-semibold">
                {product.title}
            </div>
            <div className="mt-5 text-base font-semibold">Details:</div>
            <div className="md:w-[85%] mt-2 text-base break-all text-gray-3a">
                {product.description}
            </div>
            <div className="mt-5 w-full max-w-[200px] flex justify-between items-center">
                <span className="text-2xl font-semibold text-violet-500">
                    &#36; {product.price}
                </span>
                <span className="flex justify-center items-center">
                    <StarIcon />
                    <span className="ml-1">
                        {`${product.rating.rate} (${product.rating.count})`}
                    </span>
                </span>
                {/* <span className='ml-3 text-[14px] font-inter font-semibold text-black'>{`${product.discountPercentage}% OFF`}</span> */}
            </div>
            <div className="mt-7 flex items-center">
                <span className="font-semibold">Quantity:</span>
                <div className="ml-4 flex">
                    <button
                        onClick={() => {
                            quantity - 1 > 0
                                ? setquantity((quantity) => quantity - 1)
                                : setquantity(1);
                        }}
                        disabled={quantity - 1 <= 0}
                        className="w-[40px] h-[40px] text-xl flex justify-center items-center border-[1px] border-gray bg-white  text-black disabled:text-gray-300 cursor-pointer disabled:cursor-default"
                    >
                        <span>-</span>
                    </button>
                    <div className="w-max min-w-[40px] h-[40px] font-semibold text-lg flex justify-center items-center border-y-[1px] border-y-gray">
                        <span className="mx-2">{quantity}</span>
                    </div>
                    <button
                        onClick={() => {
                            setquantity((quantity) => quantity + 1);
                        }}
                        className="w-[40px] h-[40px] text-xl flex justify-center items-center border-[1px] border-gray bg-white"
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="mt-16 w-[90%] flex justify-between items-center">
                <button
                    onClick={() => addItem(product, quantity)}
                    className="w-5/12 h-[50px] font-semibold text-violet-500 border-[1px] border-violet-500 rounded-md"
                >
                    Add to Cart
                </button>
                <BuyNowButton product={product} quantity={quantity} />
            </div>
        </div>
    );
};

export default ProductDetail;
