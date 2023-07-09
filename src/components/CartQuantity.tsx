import { useContext } from "react";
import { CartContext, CartProductType } from "../contexts/Cart/CartProvider";

const CartQuantity = ({ product }: { product: CartProductType }) => {
	const { addItem, removeItem } = useContext(CartContext);

	return (
		<div className="flex items-center">
			<span className="flex justify-start items-center text-sm text-gray-500 font-normal">
				<span>Qty:&nbsp;</span>
			</span>
			<div className="ml-1 flex">
				<button
					onClick={() => {
						product.quantity - 1 > 0 ? removeItem(product) : "";
					}}
					disabled={product.quantity - 1 <= 0}
					className="w-[30px] h-[30px] flex justify-center items-center border-[1px] border-gray bg-white text-black disabled:text-gray-300 cursor-pointer disabled:cursor-default"
				>
					<span>-</span>
				</button>
				<div className="w-max min-w-[30px] h-[30px] font-semibold text-sm flex justify-center items-center border-y-[1px] border-y-gray">
					<span className="mx-2">{product.quantity}</span>
				</div>
				<button
					onClick={() => {
						addItem(product);
					}}
					className="w-[30px] h-[30px] text-xl flex justify-center items-center border-[1px] border-gray bg-white"
				>
					+
				</button>
			</div>
		</div>
	);
};

export default CartQuantity;
