import CartProductCard from "../components/CartProductCard.jsx";
import {useContext} from "react";
import {myCart} from "../context/CartContext.jsx";

function Cart() {
    const {cartItems, getTotalPrice} = useContext(myCart);

    const subtotal = getTotalPrice();
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <div className="pt-5 h-screen">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div>
                <div className="flex items-center gap-3 mt-15">
                    <p className="text-2xl"><span className="text-[#707070]">YOUR</span> CART</p>
                    <div className="w-[40px] h-[2px] bg-black"></div>
                </div>
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">Cart is empty</p>
                ) : (
                    cartItems.map((item) => (
                        <CartProductCard
                            key={`${item._id}-${item.size}`}
                            item={item}
                        />
                    ))
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="flex items-end mt-20 flex-col">
                    <div className="w-[450px]">
                        <p className="mb-5 text-2xl"><span className="text-[#555555]">CART</span> TOTALS</p>
                        <div className="border-b border-gray-300 flex justify-between pb-3 items-center text-[#555555]">
                            <p>Subtotal</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="border-b border-gray-300 flex justify-between pb-3 items-center text-[#555555]">
                            <p>Shipping Fee</p>
                            <p>${shipping}</p>
                        </div>
                        <div className="flex justify-between pt-5 items-center">
                            <p className="font-semibold">Total</p>
                            <p className="font-semibold">${total.toFixed(2)}</p>
                        </div>
                    </div>
                    <button className="text-sm text-white w-50 h-12 cursor-pointer bg-black mt-10 px-6">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;