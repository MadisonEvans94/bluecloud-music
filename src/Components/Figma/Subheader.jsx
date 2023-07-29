import React from "react";

const Subheader = ({ text }) => {
	return (
		<h2 className="text-heading2 text-info text-subHeadingMobile md:text-subHeadingTablet lg:text-subHeadingDesktop ">
			{text}
		</h2>
	);
};

export default Subheader;
