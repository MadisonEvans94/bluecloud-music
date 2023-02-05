import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Music from "./Pages/Music/Music";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

const backgroundColor = "#2ca7ff";

function App() {
	return (
		<>
			<BrowserRouter>
				<div
					style={{
						backgroundColor: `${backgroundColor}`,
						position: "absolute",
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/music" element={<Music />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/contact" element={<Contact />} />

						{/* this will be our 404 redirect page */}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
