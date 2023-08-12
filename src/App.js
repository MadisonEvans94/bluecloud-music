import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./routes/Landing";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import StoreItemDetail from "./Components/StoreItemDetail";
import AppContext from "./Context/AppContext";
import useFetchData from "./CustomHooks/useFetchData";

function App() {
	const { dbData, loading, error } = useFetchData("/dummyDB/dynamodb.json");
	const location = useLocation();
	const [currentStoreItem, setCurrentStoreItem] = useState(null);

	return (
		<AppContext.Provider
			value={{
				currentStoreItem,
				setCurrentStoreItem,
				dbData,
				loading,
				error,
			}}
		>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/itemDetail" element={<StoreItemDetail />} />
				</Routes>
			</AnimatePresence>
		</AppContext.Provider>
	);
}

export default App;
