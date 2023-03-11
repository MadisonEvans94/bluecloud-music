import "./CatalogContainer.css";
import React from "react";

const CatalogContainer = ({ children }) => {
	return (
		<div
			className=" catalog-container
			mx-8 overflow-auto
			">
			{children}
		</div>
	);
};

export default CatalogContainer;
