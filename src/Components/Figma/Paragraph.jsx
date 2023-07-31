import React from "react";

const Paragraph = ({ children, className }) => {
	return (
		<div
			className={`text-info text-paragraphMobile md:text-paragraphTablet lg:text-paragraphDesktop ${className}`}
		>
			{children}
		</div>
	);
};

export default Paragraph;
