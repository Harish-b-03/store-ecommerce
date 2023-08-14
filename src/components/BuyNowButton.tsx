import { useContext } from "react";
import { CartContext } from "../contexts/Cart/CartProvider";
import { ProductType } from "../pages";

const BuyNowButton: React.FC<{
    product: ProductType;
    quantity?: number;
}> = ({ product, quantity = 1 }) => {
    const { addItem, toggleCart } = useContext(CartContext);

    return (
        <button
            onClick={() => {
                addItem(product, quantity);
                toggleCart();
            }}
            className="w-5/12 h-[50px] mr-5 font-semibold text-white bg-violet-500 border-2 border-violet-500 rounded-md"
        >
            Buy Now
        </button>
    );
};

export default BuyNowButton;
