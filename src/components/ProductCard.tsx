import { ProductType } from "../pages";
import { useState } from "react";
import Link from "next/link";
import ProductCardOptions from "./ProductCardOptions";

const ProductCard: React.FC<{
    product: ProductType;
}> = ({ product }) => {
    const [showOptions, setShowOptions] = useState(false);
    const productDetailURL = `/product/detail/${product.id}`;
    
    return (
        <div
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
            className="relative m-3 w-[280px] md:w-[230px] h-72 flex flex-col justify-start items-center rounded-md overflow-hidden cursor-pointer"
        >
            <div className="relative p-8 w-full h-[230px] flex justify-center items-center border border-gray-200 rounded-md overflow-hidden">
                <Link
                    href={productDetailURL}
                    className="h-[200px] overflow-clip"
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full object-contain"
                    />
                </Link>

                <ProductCardOptions product={product} show={showOptions} />
            </div>
            <Link href={productDetailURL} className="px-3 w-full">
                <div className="mt-3 w-full text-gray-700 line-clamp-1">
                    {product.title}
                </div>
                <div className="mt-2 w-full flex justify-between items-center">
                    <div className="font-semibold">&#36; {product.price}</div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
