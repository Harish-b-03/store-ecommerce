import { useContext } from "react";
import { CartContext, CartProductType } from "../contexts/Cart/CartProvider";
import Modal from "../containers/modal/Modal";
import CartCard from "./CartCard";
import LeftArrow from "./icons/LeftArrow";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartEmptyMessage from "./CartEmptyMessage";

const Cart = () => {
    const { isOpen, items, toggleCart } = useContext(CartContext);

    return (
        <Modal
            open={isOpen}
            onCloseModal={() => {
                toggleCart();
            }}
        >
            <div className="w-fit h-fit">
                <div
                    className={`absolute top-0 ${
                        isOpen
                            ? "right-0"
                            : "-right-full md:-right-1/2 opacity-0 pointer-events-none"
                    } w-full md:w-2/5 h-screen flex flex-col justify-between items-center bg-white transition-all duration-500`}
                >
                    <CartHeader />
                    <div className="w-full h-fit min-h-[90%] flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto scrollbar-hide">
                        {items.length > 0 ? (
                            <div className="pt-5 w-full h-fit flex flex-col justify-start items-center">
                                {items.map(
                                    (item: CartProductType, index: number) => (
                                        <CartCard key={index} product={item} />
                                    )
                                )}
                            </div>
                        ) : (
                            <CartEmptyMessage />
                        )}
                        {items.length > 0 && <CartFooter />}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
