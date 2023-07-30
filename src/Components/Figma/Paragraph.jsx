import React from "react";

const Paragraph = ({ children }) => {
	return (
		<div className="my-5 text-info text-paragraphMobile md:text-paragraphTablet lg:text-paragraphDesktop">
			{children}
		</div>
	);
};

export default Paragraph;
