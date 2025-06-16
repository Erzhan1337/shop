import DropDownMenu from "../components/DropDownMenu.jsx";
import Card from "../components/Card.jsx";
import { products } from "../assets/assets.js";
import {useEffect, useState} from "react";

const categories = ["Men","Women","Kids"];
const types = ["Topwear","Bottomwear","Winterwear"];

function Collection() {

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [sortBy, setSortBy] = useState("relevant");
    const [displayProducts, setDisplayProducts] = useState(products);


    useEffect(() => {
        let filteredProducts = products.filter((product) => {
            const matchesCategory =
                selectedCategory.length === 0 ||
                selectedCategory.includes(product.category);

            const matchesType =
                selectedTypes.length === 0 ||
                selectedTypes.includes(product.subCategory);

            return matchesCategory && matchesType;
        })

        if (sortBy === 'low-to-high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'high-to-low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
        setDisplayProducts(filteredProducts);
    },[selectedCategory,selectedTypes, sortBy]);

    const handleSortChange = (sortValue) => {
        setSortBy(sortValue);
    }



    const filterCategoryHandler = (e) => {
        setSelectedCategory((prev) => {
            if(e.target.checked) {
                return [...prev,e.target.value];
            }
            else {
                return prev.filter((item) => item !== e.target.value);
            }
            }
        )
    }

    const filterTypeHandler = (e) => {
        setSelectedTypes((prev) => {
            if (e.target.checked) {
                return [...prev,e.target.value];
            }
            else {
                return prev.filter((item) => item !== e.target.value);
            }
        })
    }

    return (
        <div className="border-t border-gray-300 mt-5 pt-10 flex">
            <div className="flex flex-col w-[20%]">
                <p className="text-[20px] font-semibold mb-5">FILTERS</p>
                <div className="border border-gray-300 p-5 flex flex-col gap-3 mb-5">
                    <p className="font-semibold">CATEGORIES</p>
                    {categories.map((category, index) => (
                        <label key={index}>
                            <input type="checkbox" name="category" value={category} onChange={filterCategoryHandler} /> {category}
                        </label>
                    ))}
                </div>
                <div className="flex flex-col gap-3 border border-gray-300 p-5">
                    <p className="font-semibold">TYPE</p>
                    {types.map((type, index) => (
                        <label key={index}>
                            <input type="checkbox" name="type" value={type} onChange={filterTypeHandler}/> {type}
                        </label>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-[80%] pl-10">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3 mb-7">
                        <p className="text-[24px]">
                            <span className="text-gray-400">ALL</span> COLLECTIONS
                        </p>
                        <div className="w-[50px] h-[2px] bg-black"></div>
                    </div>
                    <div>
                        <DropDownMenu sortBy={sortBy} handleChange={handleSortChange}/>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {displayProducts.map((product, i) => (
                        <Card product={product} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collection;
