import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

import Store from "./Pages/Store/Store";
import Home from "./Pages/Home/Home";
import Music from "./Pages/Music/Music";

import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />}>
					<Route path="store" element={<Store />} />
					<Route path="music" element={<Music />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
