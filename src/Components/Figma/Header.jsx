import React from "react";

const Header = ({ text, children, className }) => {
	return (
		<h1
			className={`text-headingMobile text-info md:text-headingTablet lg:text-headingDesktop ${className}`}
		>
			{text} {children}
		</h1>
	);
};

export default Header;
