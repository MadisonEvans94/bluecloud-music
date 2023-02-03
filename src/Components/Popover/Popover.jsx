import React, { useState } from "react";

const Popover = ({ children, content }) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}>
			{children}
			{isVisible && (
				<div
					style={{
						position: "absolute",
						backgroundColor: "white",
						padding: "10px",
					}}>
					{content}
				</div>
			)}
		</div>
	);
};

export default Popover;
