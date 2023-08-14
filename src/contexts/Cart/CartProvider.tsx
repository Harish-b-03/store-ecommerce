import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./CartReducer";
import { ProductType } from "../../pages";

export const CartContext = createContext({} as any);

export interface CartProductType extends ProductType {
    quantity: number;
}
export interface CartStateType {
    isOpen: boolean;
    items: CartProductType[];
    totalAmount: number;
}

const INITIAL_CART_STATE: CartStateType = {
    isOpen: false,
    items: [],
    totalAmount: 0,
};

export const CartProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_CART_STATE);

    const addItemHandler = (item: ProductType, quantity = 1) => {
        dispatch({ type: "ADD_ITEM", payload: { ...item, quantity } });
    };

    const removeItemHandler = (item: CartProductType) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } });
    };

    const toggleCartHandler = () => {
        dispatch({ type: "TOGGLE_CART" });
    };

    const buyItemHandler = (item: ProductType) => {
        dispatch({ type: "BUY_ITEM", payload: { ...item, quantity: 1 } });
    };

    const deleteItemHandler = (item: ProductType) => {
        dispatch({ type: "DELETE_ITEM", payload: { id: item.id } });
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <CartContext.Provider
            value={{
                isOpen: state.isOpen,
                items: state.items,
                totalAmount: state.totalAmount,
                addItem: addItemHandler,
                removeItem: removeItemHandler,
                toggleCart: toggleCartHandler,
                buyItem: buyItemHandler,
                deleteItem: deleteItemHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
