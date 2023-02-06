import React from "react";
import { Routes, Route } from "react-router-dom";
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
					<Route path="music" element={<Music />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
			</div>
		</>
	);
};

export default Home;
