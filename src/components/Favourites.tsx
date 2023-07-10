import { useContext } from "react";
import Modal from "../containers/modal/Modal";
import LeftArrow from "./icons/LeftArrow";
import { FavouriteContext } from "../contexts/Favourite/FavouriteProvider";
import FavouriteCard from "./FavouriteCard";
import { ProductType } from "../pages";

const Favourite = () => {
	const { isFavouriteOpen, favouriteItems, toggleFavourite } =
		useContext(FavouriteContext);

	return (
		<Modal open={isFavouriteOpen}>
			<div className="w-fit h-fit">
				<div
					className={`absolute top-0 ${
						isFavouriteOpen
							? "right-0"
							: "-right-full md:-right-1/2 opacity-0 pointer-events-none"
					} w-full md:w-2/5 h-screen flex flex-col justify-between items-center bg-white transition-all duration-500`}
				>
					<div className="relative w-full h-fit py-5 flex justify-center items-center border-b border-gray-400">
						<span className="font-semibold text-gray-600">
							Favourites
						</span>
						<button
							onClick={toggleFavourite}
							className="absolute top-1/2 left-3 md:left-6 p-2 rounded-md -translate-y-1/2"
						>
							<LeftArrow />
						</button>
					</div>
					<div className="w-full h-full">
						{favouriteItems.length > 0 ? (
							<div className="pt-5 w-full h-[90%] flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto">
								{favouriteItems.map(
									(item: ProductType, index: number) => (
										<FavouriteCard
											key={index}
											product={item}
										/>
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
										Your favourite products appear here
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

export default Favourite;
