import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./routes/Landing";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import ItemDetails from "./Components/ItemDetails";
import AppContext from "./Context/AppContext";
import useFetchData from "./CustomHooks/useFetchData";

function App() {
	const { data, loading, error } = useFetchData("/dummyDB/dynamodb.json");
	const location = useLocation();
	const [currentStoreItem, setCurrentStoreItem] = useState(null);
	console.log(data, loading, error);
	return (
		<AppContext.Provider value={{ currentStoreItem, setCurrentStoreItem }}>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/itemDetails" element={<ItemDetails />} />
				</Routes>
			</AnimatePresence>
		</AppContext.Provider>
	);
}

export default App;
