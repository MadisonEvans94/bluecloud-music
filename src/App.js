import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Figma/Home";
import Blog from "./Components/Figma/Blog";
import Store from "./Components/Figma/Store";
import Music from "./Components/Figma/Home";

// TODO:
// [ ] create Layout Templating Page

function App() {
	const location = useLocation();

	return (
		<>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/store" element={<Store />} />
					<Route path="/music" element={<Music />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
