import CartProductCard from "../components/CartProductCard.jsx";


function Cart() {
    return (
        <div className="pt-5 h-screen">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div>
                <div className="flex items-center gap-3 mt-15">
                    <p className="text-2xl"><span className="text-[#707070]">YOUR</span> CART</p>
                    <div className="w-[40px] h-[2px] bg-black"></div>
                </div>
                    <CartProductCard />
            </div>
            <div className="flex items-end mt-20 flex-col">
                <div className="w-[450px]">
                    <p className="mb-5 text-2xl"><span className="text-[#555555]">CART</span> TOTALS</p>
                    <div className="border-b border-gray-300 flex justify-between pb-3 items-center text-[#555555]">
                        <p>Subtotal</p>
                        <p>$60</p>
                    </div>
                    <div className="border-b border-gray-300 flex justify-between pb-3 items-center text-[#555555]">
                        <p>Shipping Free</p>
                        <p>$10</p>
                    </div>
                    <div className="flex justify-between pt-5 items-center">
                        <p className="font-semibold">Total</p>
                        <p className="font-semibold">70$</p>
                    </div>
                </div>
                <button className="text-sm text-white w-50 h-12 cursor-pointer bg-black mt-10" >PROCEED TO CHECKOUT</button>
            </div>
        </div>
    );
}

export default Cart;