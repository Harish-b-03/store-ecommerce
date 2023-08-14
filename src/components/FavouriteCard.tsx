import { useContext, useState } from "react";
import TrashIcon from "./icons/TrashIcon";
import { ProductType } from "../pages";
import { FavouriteContext } from "../contexts/Favourite/FavouriteProvider";
import Link from "next/link";

const FavouriteCard: React.FC<{
    product: ProductType;
}> = ({ product }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const { removeFavouriteItem } = useContext(FavouriteContext);
    const productDetailURL = `/product/detail/${product.id}`;

    return (
        <div
            onMouseEnter={() => setShowDeleteIcon(true)}
            onMouseLeave={() => setShowDeleteIcon(false)}
            className="relative my-2 mx-1 w-full md:max-w-md h-fit flex justify-center items-center"
        >
            <div className="w-1/3 max-w-[100px] p-3 ">
                <Link href={productDetailURL} className="w-full h-fit" passHref>
                    <img
                        src={product.image}
                        alt="Product image"
                        className="w-full max-h-28"
                    />
                </Link>
            </div>
            <div className="p-3 w-2/3 h-28 flex flex-col justify-between items-start">
                <div className="w-full h-fit">
                    <Link
                        href={productDetailURL}
                        className="w-full h-fit"
                        passHref
                    >
                        <span className="w-full font-semibold line-clamp-1">
                            {product.title}
                        </span>
                    </Link>
                    <div className="w-9/12 flex justify-between items-center">
                        <span className="flex justify-start items-center text-sm text-gray-500 font-normal">
                            <span>Price:&nbsp;</span>
                            <span>&#36;{product.price}</span>
                        </span>
                    </div>
                    <div className="mt-1 w-full flex text-sm justify-between items-center text-gray-600 line-clamp-2">
                        {product.description}
                    </div>
                </div>
            </div>
            <button
                className={`absolute top-3 md:top-5 right-3 ${
                    showDeleteIcon ? "" : "md:opacity-0 md:pointer-events-none"
                } text-gray-600 hover:text-black transition-all duration-300`}
                onClick={() => removeFavouriteItem(product)}
            >
                <TrashIcon />
            </button>
        </div>
    );
};

export default FavouriteCard;
