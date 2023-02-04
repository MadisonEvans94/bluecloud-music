import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />

			{/* this will be our 404 redirect page */}
			<Route exact path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
