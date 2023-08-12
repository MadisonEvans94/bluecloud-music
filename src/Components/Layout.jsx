import React from "react";
import ResponsiveNav from "./Navigation/ResponsiveNav";

const Layout = ({ children }) => {
	return (
		<>
			<ResponsiveNav />
			<div className="px-5 pb-5">{children}</div>
		</>
	);
};

export default Layout;
