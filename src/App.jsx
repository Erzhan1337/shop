import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Collection from "./Pages/Collection.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="px-25 pt-10">
                <NavBar />
            <Routes>
             <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path={`/product/:id`} element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;