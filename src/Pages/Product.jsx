import {useParams} from "react-router-dom";
import {assets, products} from "../assets/assets.js";
import {useContext, useEffect, useState} from "react";
import {myCart} from "../context/CartContext.jsx";



function Product() {
    const {id} = useParams();
    const product = products.find((product) => product['_id'] === id);
    const[img,setImg] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const {addToCart} = useContext(myCart);

    const handleClick = (size) => {
        setSelectedSize(size);
    }

    const addCartHandler = () => {
        if(!selectedSize){
            alert("Please select size!");
            return;
        }

        addToCart(product, selectedSize);
        alert("Added to cart!");
    }

    useEffect(() => {
        if (product) {
            setImg(product.image[0]);
        }
    }, [product]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex gap-x-10 pt-5">
        <div className="w-[50%] h-[40vw] flex">
            <div className="w-[110px] h-full grid grid-cols-1 gap-7 mr-5">
                    {product.image.map((image, index) => (
                        <img src={image} key={index} onClick={() => setImg(image)} className="w-[110px] h-[130px] object-cover cursor-pointer" />
                    ))}
            </div>
            <div className="w-full h-full">
                {img && (
                    <img
                        src={img}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        </div>
            <div className="w-[50%] h-[40vw] pt-3">
                <h3 className="text-[24px] font-semibold mb-3">{product.name}</h3>
                <div className="flex gap-1 items-center mb-7">
                    {Array.from({length:5}).map((item, index) => (
                        <img key={index} src={assets.star_icon} alt="star" className="w-[12px] h-[12px]"/>
                    ))}
                    <p>(112)</p>
                </div>
                <p className="text-[30px] font-semibold mb-5">${product.price}</p>
                <p className="text-base text-[#555555] mb-7">{product.description}</p>
                <div>
                    <p className="mb-5 text-base">Select Size</p>
                    <div className="flex gap-5 w-full mb-7">
                        {product.sizes.map((size, index) => (
                            <button key={index} className={`px-4 py-2 bg-[#FBFBFB] border cursor-pointer ${selectedSize === size ? 'border-[#FF8551]' : 'border-gray-300'}`} onClick={() => handleClick(size)}>{size}</button>
                        ))}
                    </div>
                    <button className="text-white bg-black px-8 py-2 mb-10" onClick={addCartHandler}>ADD TO CART</button>
                    <div className="h-[1px] bg-gray-300 w-[80%] mb-5"></div>
                    <p className="text-[#555555]">100% Original product.</p>
                    <p className="text-[#555555]">Cash on delivery is available on this product.</p>
                    <p className="text-[#555555]">Easy return and exchange policy within 7 days.</p>
                </div>
            </div>
        </div>
    );
}

export default Product;