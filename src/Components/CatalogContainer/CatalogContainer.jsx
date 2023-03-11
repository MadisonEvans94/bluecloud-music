import "./CatalogContainer.css";
import React from "react";

const CatalogContainer = ({ children }) => {
	return (
		<div
			className="
			mx-8 border flex-1 overflow-y-auto
			">
			{children}
		</div>
	);
};

export default CatalogContainer;
