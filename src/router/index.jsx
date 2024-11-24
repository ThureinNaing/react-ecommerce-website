import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Iphone from "../pages/ProductsCategory/iphone";
import MacBook from "../pages/ProductsCategory/macbook";
import Ipad from "../pages/ProductsCategory/ipad";
import Watch from "../pages/ProductsCategory/watch";
import Airpods from "../pages/ProductsCategory/airpods";
import Accessories from "../pages/ProductsCategory/accessories";
import AllProducts from "../pages/ProductsCategory/AllProducts";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import DetailAllProducts from "../components/DetailAllProducts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/category",
				element: <Category />,
			},
			{
				path: "/product",
				element: <Product />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/iphone",
				element: <Iphone />,
			},
			{
				path: "/macbook",
				element: <MacBook />,
			},
			{
				path: "/ipad",
				element: <Ipad />,
			},
			{
				path: "/watch",
				element: <Watch />,
			},
			{
				path: "/airpods",
				element: <Airpods />,
			},
			{
				path: "/accessories",
				element: <Accessories />,
			},
			{
				path: "/allProducts",
				element: <AllProducts />,
			},
			{
				path: "allProducts/:id",
				element: <DetailAllProducts />,
			},
			{
				path: "signIn",
				element: <SignIn />,
			},
			{
				path: "signUp",
				element: <SignUp />,
			},
			{
				path: "forgotPassword",
				element: <ForgotPassword />,
			},
		],
	},
]);

export default router;
