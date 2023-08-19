import { useContext } from "react";
import LeftArrow from "./icons/LeftArrow";
import { CartContext } from "../contexts/Cart/CartProvider";

const CartHeader = () => {
    const { toggleCart } = useContext(CartContext);

    return (
        <div className="relative w-full h-fit py-5 flex justify-center items-center border-b border-gray-400">
            <span className="font-semibold text-gray-600">Cart</span>
            <button
                onClick={toggleCart}
                className="absolute top-1/2 left-3 md:left-6 p-2 rounded-md -translate-y-1/2"
            >
                <LeftArrow />
            </button>
        </div>
    );
};

export default CartHeader;
