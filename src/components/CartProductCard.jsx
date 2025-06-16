import { assets } from "../assets/assets.js";
import {useState} from "react";

function CartProductCard() {
    const [quantity, setQuantity] = useState(1);


    const quantityHandler = (e) => {
        setQuantity(Number(e.target.value));
    };


    return (
        <>
            {quantity > 0 && (
                <div className="flex justify-between items-center border-t border-b border-gray-300 py-5 mt-5">
                    <div className="flex items-center">
                        <img src={assets.profile_icon} alt="product" className="w-[80px] h-[92px]" />
                        <div className="flex flex-col pl-5">
                            <h4 className="text-[18px] font-semibold mb-4">
                                Men
                            </h4>
                            <div className="flex items-center gap-4">
                                <p className="text-[#494949] text-base">
                                    $100
                                </p>
                                <div className="flex gap-5">
                                    <div className="px-2 py-1 bg-gray-200">
                                        M
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
                            value={quantity}
                            onChange={quantityHandler}
                        />
                    </div>
                    <div className="w-[20px] h-[20px] flex items-center">
                        <img src={assets.bin_icon} alt="delete" />
                    </div>
                </div>
            )}
        </>
    );
}

export default CartProductCard;