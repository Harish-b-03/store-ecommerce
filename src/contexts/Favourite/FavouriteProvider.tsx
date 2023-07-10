import { createContext, useEffect, useReducer, useState } from "react";
import { ProductType } from "../../pages";

export const FavouriteContext = createContext({} as any);

export interface FavouriteStateType {
	isFavouriteOpen: boolean;
	favouriteItems: ProductType[];
}

const INITIAL_FAVOURITE_STATE: FavouriteStateType = {
	isFavouriteOpen: false,
	favouriteItems: [],
};

export const FavouriteProvider = ({ children }: any) => {
	const [state, setState] = useState(INITIAL_FAVOURITE_STATE);

	const addFavouriteItemHandler = (item: ProductType) => {
		const favouriteItem = state.favouriteItems.filter(
			(i) => i.id === item.id
		);
		if (favouriteItem.length <= 0) {
			setState({
				...state,
				favouriteItems: [...state.favouriteItems, item],
			});
		}
	};

	const removeFavouriteItemHandler = (item: ProductType) => {
		const restItem = state.favouriteItems.filter((i) => i.id !== item.id);
		setState({ ...state, favouriteItems: [...restItem] });
	};

	const toggleFavouriteHandler = () => {
		setState({ ...state, isFavouriteOpen: !state.isFavouriteOpen });
	};

	useEffect(() => {
		console.log(state);
	}, [state]);

	return (
		<FavouriteContext.Provider
			value={{
				isFavouriteOpen: state.isFavouriteOpen,
				favouriteItems: state.favouriteItems,
				addFavouriteItem: addFavouriteItemHandler,
				removeFavouriteItem: removeFavouriteItemHandler,
				toggleFavourite: toggleFavouriteHandler,
			}}
		>
			{children}
		</FavouriteContext.Provider>
	);
};
