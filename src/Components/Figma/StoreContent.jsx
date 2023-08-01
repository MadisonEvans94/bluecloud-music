import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
// TODO
const StoreContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			id="store"
			className={`h-screen pl-10 pr-24 flex flex-col justify-center my-auto relative snap-center ${className}`}
		>
			<Header>Sample Pack</Header>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</Paragraph>
		</div>
	);
});

export default StoreContent;
