import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

import { BrowserRouter as Router } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Home from "./Pages/Home/Home";
import Music from "./Pages/Music/Music";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />}>
						<Route path="product-page" element={<ProductPage />} />
						<Route path="music" element={<Music />} />
						<Route path="checkout" element={<Checkout />} />
						<Route path="contact" element={<Contact />} />

						{/* this will be our 404 redirect page */}
						<Route path="*" element={<PageNotFound />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
