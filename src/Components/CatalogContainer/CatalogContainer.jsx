import "./CatalogContainer.css";
import React from "react";

const CatalogContainer = ({ children }) => {
	return (
		<div
			className="
			mx-8 card overflow-scroll h-full">
			{children}
		</div>
	);
};

export default CatalogContainer;
