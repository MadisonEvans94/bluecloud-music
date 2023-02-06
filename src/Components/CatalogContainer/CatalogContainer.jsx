import "./CatalogContainer.css";
import React from "react";

const CatalogContainer = ({ children }) => {
	return <div className="music-list-card">{children}</div>;
};

export default CatalogContainer;
