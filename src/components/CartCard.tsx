import { CartProductType } from "../contexts/Cart/CartProvider";
import CartQuantity from "./CartQuantity";

const CartCard: React.FC<{
	product: CartProductType;
}> = ({ product }) => {
	return (
		<div className="my-2 mx-1 w-full max-w-md h-fit flex justify-center items-center">
			<div className="w-1/3 max-w-[100px] p-3 ">
				<img
					src={product.image}
					alt="Product image"
					className="w-full max-h-28"
				/>
			</div>
			<div className="p-3 w-2/3 h-28 flex flex-col justify-between items-start">
				<div className="w-full h-fit">
					<span className="w-full font-semibold line-clamp-1">
						{product.title}
					</span>
					<div className="w-9/12 flex justify-between items-center">
						<span className="flex justify-start items-center text-sm text-gray-500 font-normal">
							<span>Price:&nbsp;</span>
							<span>&#36;{product.price}</span>
						</span>
					</div>
				</div>
				<div className="w-full flex justify-between items-center ">
					<div className="h-full flex justify-center items-center ">
						<CartQuantity product={product} />
					</div>
					<span className="h-full flex justify-center items-center text-gray-700 font-semibold">
						<span>Total:&nbsp;</span>
						<span>&#36; {product.price * product.quantity}</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
