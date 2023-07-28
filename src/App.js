import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home/Home";

// import Store from "./Pages/Store/Store";
// import Music from "./Pages/Music/Music";
// import Contact from "./Pages/Contact/Contact";
// import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
	const location = useLocation();

	return (
		<>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
