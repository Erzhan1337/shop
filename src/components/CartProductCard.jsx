// CartProductCard.jsx
import { assets } from "../assets/assets.js";
import {useContext} from "react";
import {myCart} from "../context/CartContext.jsx";

function CartProductCard({item}) {
    const {removeFromCart, updateQuantity} = useContext(myCart);

    const quantityHandler = (e) => {
        const newQuantity = Number(e.target.value);
        updateQuantity(item._id, item.size, newQuantity);
    };

    const handleRemove = () => {
        removeFromCart(item._id, item.size);
    };

    return (
        <div className="flex justify-between items-center border-t border-b border-gray-300 py-5 mt-5">
            <div className="flex items-center">
                <img src={item.image[0]} alt="product" className="w-[80px] h-[92px]" />
                <div className="flex flex-col pl-5">
                    <h4 className="text-[18px] font-semibold mb-4">
                        {item.name}
                    </h4>
                    <div className="flex items-center gap-4">
                        <p className="text-[#494949] text-base">
                            ${item.price}
                        </p>
                        <div className="flex gap-5">
                            <div className="px-2 py-1 bg-gray-200">
                                {item.size}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <input
                    className="w-[100px] h-[30px] border border-gray-300 text-start pl-2 text-gray-400"
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={quantityHandler}
                />
            </div>
            <div className="w-[20px] h-[20px] flex items-center cursor-pointer">
                <img src={assets.bin_icon} alt="delete" onClick={handleRemove}/>
            </div>
        </div>
    );
}

export default CartProductCard;