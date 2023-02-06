import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import ProductPage from "../ProductPage/ProductPage";
import Contact from "../Contact/Contact";
import Checkout from "../Checkout/Checkout";
import Music from "../../Pages/Music/Music";

const backgroundColor = "#2ca7ff";

const Home = () => {
	return (
		<>
			<div
				style={{
					position: "absolute",
					backgroundColor: `${backgroundColor}`,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
				}}>
				<Navigation />
				<Routes>
					<Route path="/" element={<ProductPage />} />
					<Route path="/home/music" element={<Music />} />
					<Route path="/home/checkout" element={<Checkout />} />
					<Route path="/home/contact" element={<Contact />} />
				</Routes>
				<Outlet />
			</div>
		</>
	);
};

export default Home;
