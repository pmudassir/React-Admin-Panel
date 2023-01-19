import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import User from "./pages/User";
import UserList from "./pages/UserList";
import NewProduct from "./pages/NewProduct";
import "./PageRoutes.css"
import Home from "./pages/Home";

export function PageRoutes() {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/newProduct" element={<NewProduct />} />
                </Routes>
            </div>
        </>
    )
}