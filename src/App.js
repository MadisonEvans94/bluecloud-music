import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Music from "./Pages/Music/Music";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/music" element={<Music />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/contact" element={<Contact />} />

			{/* this will be our 404 redirect page */}
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
