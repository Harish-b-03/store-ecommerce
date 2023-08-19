import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/Cart/CartProvider";
import { ProductType } from "../pages";
import PlusIcon from "./icons/PlusIcon";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import StarIcon from "./icons/StarIcon";
import { FavouriteContext } from "../contexts/Favourite/FavouriteProvider";

const ProductCardOptions: React.FC<{ product: ProductType; show: boolean }> = ({
    show,
    product,
}) => {
    const { addItem } = useContext(CartContext);
    const { addFavouriteItem, favouriteItems, removeFavouriteItem } =
        useContext(FavouriteContext);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const res = favouriteItems.filter(
            (item: ProductType) => item.id === product.id
        )[0];
        if (res !== undefined) {
            setIsFavourite(true);
        } else {
            setIsFavourite(false);
        }
    }, [isFavourite, favouriteItems]);

    return (
        <div
            className={`h-full absolute top-[1px] ${
                show
                    ? "right-[1px]"
                    : "-right-full scale-0 pointer-events-none opacity-0"
            }  text-gray-500 flex flex-col justify-between items-center overflow-hidden transition-all duration-300`}
        >
            <button
                onClick={() => {
                    addItem(product);
                }}
                className="my-2 p-2 text-black bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-800 hover:text-white"
            >
                <PlusIcon />
            </button>
            <div className="px-1 py-4 space-y-2 flex flex-col justify-center items-center bg-gray-200 bg-opacity-40 rounded-tl-md overflow-hidden transition-all duration-300">
                <button
                    onClick={() => {
                        if (isFavourite) {
                            removeFavouriteItem(product);
                        } else {
                            addFavouriteItem(product);
                        }
                    }}
                >
                    <FavouriteIcon
                        width="24px"
                        height="26px"
                        className={`m-1.5 stroke-[1.5px] ${
                            isFavourite
                                ? "stroke-violet-500 fill-violet-500"
                                : "stroke-gray-500 fill-none"
                        } `}
                    />
                </button>
                <div className="text-xs flex justify-center items-center">
                    <StarIcon className="w-3 h-3" />
                    <span className="ml-0.5">
                        {product.rating.rate.toPrecision(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCardOptions;
