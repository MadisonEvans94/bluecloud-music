import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home/Home";
import Layout from "./Components/Figma/Layout";

// TODO:
// [ ] create Layout Templating Page

function App() {
	const location = useLocation();

	return (
		<>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Landing />} />
					<Route
						path="/home"
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
