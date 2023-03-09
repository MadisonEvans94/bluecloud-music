import "./CatalogContainer.css";
import React from "react";

const CatalogContainer = ({ children }) => {
	return <div className="catalog-container card">{children}</div>;
};

export default CatalogContainer;
