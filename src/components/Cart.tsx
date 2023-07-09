import { useContext } from "react";
import { CartContext, CartProductType } from "../contexts/Cart/CartProvider";
import Modal from "../containers/modal/Modal";
import CartCard from "./CartCard";
import LeftArrow from "./icons/LeftArrow";

const Cart = () => {
	const { isOpen, items, toggleCart } = useContext(CartContext);

	return (
		<Modal open={isOpen}>
			<div className="w-fit h-fit">
				<div
					className={`absolute top-0 ${
						isOpen
							? "right-0"
							: "-right-full md:-right-1/2 opacity-0 pointer-events-none"
					} w-full md:w-2/5 h-screen flex flex-col justify-between items-center bg-white transition-all duration-500`}
				>
					<div className="relative w-full h-fit py-5 flex justify-center items-center border-b border-gray-400">
						<span className="font-semibold text-gray-600">
							Cart
						</span>
						<button
							onClick={toggleCart}
							className="absolute top-1/2 left-3 md:left-6 p-2 rounded-md -translate-y-1/2"
						>
							<LeftArrow />
						</button>
					</div>
					<div className="w-full h-full">
						{items.length > 0 ? (
							<div className="pt-5 w-full h-[90%] flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto">
								{items.map(
									(item: CartProductType, index: number) => (
										<CartCard key={index} product={item} />
									)
								)}
							</div>
						) : (
							<div className="w-full h-full flex justify-center items-center">
								<div className="flex flex-col justify-center items-center">
									<img
										src="/images/Empty_shopping_cart.svg"
										alt="Empty Shopping Cart"
									/>
									<span className="mt-3 text-gray-500 font-medium">
										Please add products to your cart
									</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
