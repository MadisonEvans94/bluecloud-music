import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./routes/Landing";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import StoreItemDetail from "./Components/StoreItemDetail";
import AppContext from "./Context/AppContext";
import dbData from "./dummyDB/dynamodb.json";
import BlogDetail from "./Components/BlogDetail";
// import useFetchData from "./CustomHooks/useFetchData";

function App() {
	// FIXME: fetch isn't working on dummy data
	// const { dbData, loading, error } = useFetchData("/dummyDB/dynamodb.json");
	// console.log("DATA:", dbData, "LOADING: ", loading, "ERROR: ", error);

	const location = useLocation();
	const [currentStoreItem, setCurrentStoreItem] = useState(null);

	return (
		<AppContext.Provider
			value={{
				currentStoreItem,
				setCurrentStoreItem,
				dbData,
			}}
		>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/itemDetails" element={<StoreItemDetail />} />
					<Route path="/blogDetail" element={<BlogDetail />} />
				</Routes>
			</AnimatePresence>
		</AppContext.Provider>
	);
}

export default App;
