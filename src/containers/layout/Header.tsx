import { useContext, useEffect, useState } from "react";
import CartIcon from "../../assets/icons/CartIcon";
import FavouriteIcon from "../../assets/icons/FavouriteIcon";
import PersonIcon from "../../assets/icons/PersonIcon";
import ActiveLink from "../../components/ActiveLink";
import { CartContext, CartProductType } from "../../contexts/Cart/CartProvider";
import Link from "next/link";
import { FavouriteContext } from "../../contexts/Favourite/FavouriteProvider";
import { ProductType } from "../../pages";

const navLinks = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Shop",
		link: "/product",
	},
	{
		name: "About",
		link: "/about",
	},
];

const Header = () => {
	const { items, toggleCart } = useContext(CartContext);
	const { favouriteItems, toggleFavourite } = useContext(FavouriteContext);
	const [totalItems, setTotalItems] = useState(items.length);
	const [totalFavouriteItems, setTotalFavouriteItems] = useState(
		favouriteItems.length
	);

	useEffect(() => {
		setTotalFavouriteItems(favouriteItems.length);
	}, [favouriteItems]);

	useEffect(() => {
		let total = 0;
		items.map((item: CartProductType) => {
			total += item.quantity;
		});
		setTotalItems(total);
	}, [items]);

	return (
		<header className="fixed top-0 w-full h-[70px] px-5 lg:px-10 z-50 flex justify-between items-center transition-all ease-in-out duration-300 text-gray-3a bg-white border-b-2 border-b-neutral-100">
			<div className="flex justify-between items-center">
				<Link
					href="/"
					className="mr-3 lg:mr-5 text-2xl font-lekton font-semibold tracking-tight cursor-pointer"
				>
					Store.
				</Link>
				<div className="hidden ml-3 lg:ml-8 md:flex justify-center items-centertext-gray-3a">
					{navLinks.map((navLink, index) => (
						<ActiveLink
							key={index}
							href={navLink.link}
							activeClassName="text-violet-500 font-semibold"
						>
							<div className="w-[60px] md:w-[70px] lg:mr-0.5 tracking-wide flex justify-center items-center cursor-pointer hover:tracking-normal hover:font-semibold hover:text-violet-500">
								{navLink.name}
							</div>
						</ActiveLink>
					))}
					<a
						href="https://medium.com/@harishbalaji369"
						target="_blank"
						rel="noreferrer"
						className="hover:text-violet-500 hover:font-semibold"
					>
						<div className="w-[60px] md:w-[70px] lg:mr-0.5 tracking-wide flex justify-center items-center cursor-pointer hover:tracking-normal hover:font-semibold hover:text-violet-500">
							Blog
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1"
								stroke="currentColor"
								className="-ml-0 -mt-3 w-2.5 h-2.5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</div>
					</a>
				</div>
			</div>
			<div className="flex ">
				{/* <div className="ml-3 pt-1.5 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg">
					<PersonIcon
						width="26px"
						height="24px"
						className="m-1.5 fill-gray-500 stroke-gray-500 hover:fill-violet-700 hover:stroke-violet-700"
					/>
				</div> */}
				<button
					onClick={() => toggleFavourite()}
					className="relative ml-3 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg"
				>
					<FavouriteIcon
						width="26px"
						height="26px"
						className="m-1.5 fill-gray-500 hover:fill-violet-700"
					/>
					{favouriteItems.length > 0 && (
						<div className="absolute top-0 right-2 translate-x-1/2 w-5 min-w-fit h-5 p-1 text-xs flex justify-center items-center font-semibold bg-violet-700 text-white rounded-full">
							{totalFavouriteItems}
						</div>
					)}
				</button>
				<button
					onClick={() => toggleCart()}
					className="relative ml-3 pt-0.5 w-fit h-fit flex justify-center items-center cursor-pointer text-gray-3a rounded-lg text-gray-500 hover:text-violet-700 hover:stroke-[5px]"
				>
					<CartIcon
						width="26px"
						height="26px"
						className="m-1.5 stroke-[4px] stroke-current "
					/>
					{items.length > 0 && (
						<div className="absolute top-0 right-2 translate-x-1/2 w-5 min-w-fit h-5 p-1 text-xs flex justify-center items-center font-semibold bg-violet-700 text-white rounded-full">
							{totalItems}
						</div>
					)}
				</button>
			</div>
		</header>
	);
};

export default Header;
