import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./CartReducer";
import { ProductType } from "../../pages";

export const CartContext = createContext({} as any);

export interface CartStateType{
    isOpen: boolean;
    items: ProductType[];
    totalAmount: number;
}

const INITIAL_CART_STATE:CartStateType = {
    isOpen: true,
    items: [],
    totalAmount: 0,
};
  

export const CartProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_CART_STATE)
    
    const addItemHandler = (item:ProductType, quantity = 1) => {
        dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } })
    }

    const toggleCartHandler = () => {
        dispatch({ type: 'TOGGLE_CART' })
    }

    useEffect(() => {
      console.log(state)
    }, [state])
    

    return(
        <CartContext.Provider 
            value={{
                isOpen: state.isOpen,
                items: state.items,
                totalAmount: state.totalAmount,
                addItem: addItemHandler,
                toggleCart: toggleCartHandler
            }}
        >
            {children}
        </CartContext.Provider>
    )
}