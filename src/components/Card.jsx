import {Link} from "react-router-dom";

function Card({ product }) {
    return (
        <div className="w-[240px] h-[350px] flex flex-col justify-between pb-2">
            <div className="w-full max-h-[80%]">
                <Link to={`/product/${product['_id']}`}>
                    <img src={product.image[0]} alt={product.name} className="w-full h-full object-cover hover:scale-120 transition-all duration-400" />
                </Link>
            </div>
            <div>
                <p className="text-sm font-medium text-[#494949]">{product.name}</p>
                <p className="text-[#494949] text-[1rem] font-semibold">${product.price}</p>
            </div>
        </div>
    );
}

export default Card;