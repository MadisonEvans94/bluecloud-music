import React from "react";

const Subheader = ({ text, children }) => {
	return (
		<h2 className="text-heading2 my-4 text-info text-subHeadingMobile md:text-subHeadingTablet lg:text-subHeadingDesktop ">
			{text} {children}
		</h2>
	);
};

export default Subheader;
