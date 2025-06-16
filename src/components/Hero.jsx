import {assets,products} from "../assets/assets.js";
import Card from "./Card.jsx";
import {useRef, useState} from "react";

function Hero() {

    const [isVisible, setIsVisible] = useState(11);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [email, setEmail] = useState("");
    const ref = useRef();

    const changeVisibleCards = () => {
        const newVisible = isVisible + 10;
        if(newVisible >= products.length) {
            setIsVisible(products.length + 1);
            setButtonVisible(false);
            return;
        }
        setIsVisible(newVisible);
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email.trim()){
            ref.current.focus();
            return;
        }
        if (!validateEmail(email)) {
            ref.current.focus();
            return;
        }
        else {
            alert("Sucess!");
            setEmail("");
        }
    }
    return (
        <div>
            <div className="border border-gray-400 h-[500px] mt-5 flex">
                <div className="w-[50%] h-full flex flex-col gap-y-3 justify-center items-center">
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-[45px] bg-black"></div>
                        <div>
                            <p className="text-[#414141]">OUR BESTSELLERS</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-prata text-6xl font-light text-[#414141]">Latest Arrivals</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div><p className="text-[#414141]">SHOP NOW</p></div>
                        <div className="w-[43px] h-[1px] bg-black"></div>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <img src={assets.hero_img} className="h-full w-full object-cover object-center" alt="hero image" />
                </div>
            </div>
            <div className="pt-20">
                <div className="flex items-center gap-3 justify-center ">
                    <p className="text-3xl font-semibold"><span className="text-[#707070]">LATEST</span> COLLECTIONS</p>
                    <div className="w-[50px] h-[2px] bg-black"></div>
                </div>
                <p className="text-center text-[#868686] pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                <div className="mt-20 grid grid-cols-5 gap-y-5">
                    {products.slice(1,isVisible).map((product, index) => (
                        <Card key={index} product={product} />
                    ))}
                </div>
                <div className="flex justify-center mb-20">
                    <button className={`px-8 py-2 border mt-15 ${buttonVisible ? '' : 'hidden'} cursor-pointer`} onClick={changeVisibleCards}>Load more</button>
                </div>
                <div className="mb-15">
                    <div className="flex items-center gap-3 justify-center">
                        <p className="text-3xl"><span className="text-[#707070]">BEST</span> SELLERS</p>
                        <div className="w-[50px] h-[2px] bg-black"></div>
                    </div>
                    <p className="text-[#868686] text-center mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                </div>
                <div className="grid grid-cols-5">
                    {products.slice(isVisible,isVisible + 5).map((product, index) => (
                        <Card key={index} product={product} />
                    ))}
                </div>
                <div className="flex justify-around mb-20 mt-40">
                    <div className="flex flex-col items-center gap-y-5">
                        <div className="w-[48px] h-[48px] ">
                            <img src={assets.exchange_icon} className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex flex-col items-center gap-y-3">
                            <p className="text-base font-bold">Easy Exchange Policy</p>
                            <p className="text-[#898989] text-base">We offer hassle free  exchange policy</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-5">
                        <div className="w-[48px] h-[48px] ">
                            <img src={assets.quality_icon} className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex flex-col items-center gap-y-3">
                            <p className="text-base font-bold">7 Days Return Policy</p>
                            <p className="text-[#898989] text-base">We provide 7 days free return policy </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-5">
                        <div className="w-[48px] h-[48px] ">
                            <img src={assets.support_img} className="w-full h-full object-contain"/>
                        </div>
                        <div className="flex flex-col items-center gap-y-3">
                            <p className="text-base font-bold">Best Customer Support</p>
                            <p className="text-[#898989] text-base">We provide 24/7 customer support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-y-10">
                <p className="font-semibold text-2xl">Subscribe now & get 20% off</p>
                <p className="text-base text-[#9A9A9A]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <form className="w-full flex justify-center mb-10">
                    <input type="email" ref={ref} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" className="pl-2 outline-none w-[460px] py-3 border border-gray-300 object-contain"/>
                    <button onClick={handleSubmit} type="submit" className="px-12 py-3 bg-black text-white cursor-pointer">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    );
}

export default Hero;