import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
// import Music from "./Pages/Music/Music";
// import Checkout from "./Pages/Checkout/Checkout";
// import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
	return (
		<div
			style={{
				backgroundColor: "#46CDFF",
				position: "absolute",
				width: "100%",
				height: "100%",
				display: "flex",

				alignItems: "center",
			}}>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/music" element={<Music />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/contact" element={<Contact />} /> */}

				{/* this will be our 404 redirect page */}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
