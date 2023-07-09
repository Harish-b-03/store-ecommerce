import { CartStateType } from "./CartProvider";

const addItem = (state: CartStateType, action: any) => {
	const cartItem = state.items.filter(
		(item) => item.id === action.payload.id
	)[0];
	if (cartItem !== undefined) {
		const restItems = state.items.filter(
			(item) => item.id !== action.payload.id
		);
		const updatedItem = {
			...cartItem,
			quantity: cartItem.quantity + action.payload.quantity,
		};
		return {
			...state,
			items: [...restItems, updatedItem],
		};
	} else {
		return {
			...state,
			items: [...state.items, action.payload],
		};
	}
};

const removeItem = (state: CartStateType, action: any) => {
	const cartItem = state.items.filter(
		(item) => item.id === action.payload.id
	)[0];
	if (cartItem !== undefined) {
		const restItems = state.items.filter(
			(item) => item.id !== action.payload.id
		);
		if (cartItem.quantity - 1 > 0) {
			const updatedItem = {
				...cartItem,
				quantity: cartItem.quantity - 1,
			};

			return {
				...state,
				items: [...restItems, updatedItem],
			};
		} else {
			return {
				...state,
				items: [...restItems],
			};
		}
	} else {
		return state;
	}
};

export const reducer = (state: CartStateType, action: any) => {
	switch (action.type) {
		case "ADD_ITEM":
			return addItem(state, action);
		case "REMOVE_ITEM":
			return removeItem(state, action);
		case "TOGGLE_CART":
			return {
				...state,
				isOpen: !state.isOpen,
			};
		case "BUY_ITEM":
			return {
				...addItem(state, action),
				isOpen: true,
			};

		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};
