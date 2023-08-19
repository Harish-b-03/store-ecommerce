
const CartEmptyMessage = () => {
    return (
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
    );
};

export default CartEmptyMessage;
