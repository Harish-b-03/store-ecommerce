import { useContext, useEffect, useState } from "react";
import { CartContext, CartProductType } from "../contexts/Cart/CartProvider";

const CartFooter = () => {
    const { items } = useContext(CartContext);
    const [Amount, setAmount] = useState<Number>(0);

    useEffect(() => {
        let sum = 0;
        items.forEach((item: CartProductType) => {
            sum += item.quantity * item.price;
        });
        setAmount(sum);
    }, [items]);

    return (
        <div className="py-5 mt-8 px-5 w-full h-fit flex justify-center items-center">
            <div className="w-full max-w-sm flex flex-col justify-center items-center">
                <div className="mb-5 w-full h-fit flex justify-between items-center font-semibold">
                    <span className="">
                        <span>Total </span>
                        <span className="text-xs font-normal text-gray-500">
                            {"(GST Included)"}
                        </span>
                    </span>
                    <div>
                        <span>&#36; {`${Amount.toFixed(2)}`}</span>
                    </div>
                </div>
                <button
                    disabled={items.length > 0 ? false : true}
                    onClick={() => {}}
                    className={`w-full h-10 text-white font-semibold bg-violet-500 rounded-md cursor-pointer disabled:opacity-0 disabled:pointer-events-none hover:bg-violet-700 transition-all duration-300 shadow-md shadow-gray-300`}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default CartFooter;
