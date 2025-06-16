import {assets} from "../assets/assets.js"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {myCart} from "../context/CartContext.jsx";


function NavBar() {

    const {getTotalQuantity} = useContext(myCart);
    return (
        <div className="flex justify-between items-center">
            <div className="w-[160px] h-[40px]">
                <Link to="/"><img src={assets.logo} alt="logo" className="w-[100%] h-[100%] object-contain"/></Link>
            </div>
            <div className="flex gap-10">
                <Link to="/">HOME</Link>
                <Link to="/collection">COLLECTION</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <div className="flex gap-6">
                <Link to="/collection">
                    <div className="w-[24px] h-[24px]">
                        <img src={assets.search_icon} className="w-full h-full object-contain" />
                    </div>
                </Link>
                <Link to="/login">
                    <div className="w-[24px] h-[24px]">
                        <img src={assets.profile_icon} className="w-full h-full object-contain" />
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="w-[24px] h-[24px] relative">
                        <img src={assets.cart_icon} className="w-full h-full object-contain" />
                        <div className="w-4 h-4 flex justify-center items-center rounded-full bg-black text-[8px] text-white absolute top-[13px] left-[12px]">{getTotalQuantity()}</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;