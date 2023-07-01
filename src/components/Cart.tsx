import { useContext } from "react"
import { CartContext } from "../contexts/Cart/CartProvider"
import Modal from "../containers/modal/Modal"
import CartCard from "./CartCard"
import { ProductType } from "../pages"

const Cart = () => {
  const { isOpen, items, toggleCart } = useContext(CartContext)
  return (
    <Modal open={isOpen}>
        <div className="w-fit h-fit">
            <div className={`absolute top-0 ${(isOpen)?"right-0":"-right-1/2 opacity-0 pointer-events-none"} w-2/5 h-screen flex flex-col justify-between items-center bg-white transition-all duration-500`}>
                <div className="relative w-full h-fit py-5 flex justify-center items-center border-b border-gray-400">
                    <span className="font-semibold text-gray-600">
                        Cart
                    </span>
                    <button 
                        onClick={toggleCart}
                        className="absolute top-1/2 left-6 p-2 rounded-md -translate-y-1/2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-full">
                    {
                        (items.length > 0)?
                        <div className="pt-5 w-full h-[90%] flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto">
                            {
                                items.map((item:ProductType, index:number) => (
                                    <CartCard key={index} product={item}/>
                                ))
                            }
                        </div>
                        :
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
                    }
                </div>

            </div>
        </div>
    </Modal>
  )
}

export default Cart