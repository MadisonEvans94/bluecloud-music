import React from "react";

const Paragraph = ({ children }) => {
	return (
		<div className="text-info text-paragraphMobile md:text-paragraphTablet lg:text-paragraphDesktop">
			{children}
		</div>
	);
};

export default Paragraph;
