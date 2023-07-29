import React from "react";

const Header = ({ text }) => {
	return (
		<h1 className="text-headingMobile my-12 text-info md:text-headingTablet lg:text-headingDesktop">
			{text}
		</h1>
	);
};

export default Header;
