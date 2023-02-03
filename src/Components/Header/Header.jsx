import React from "react";

const Header = (props) => {
	//[x] Header component needs to return an h1 with a class name of header
	return (
		<>
			<div>{props.children}</div>
		</>
	);
};

export default Header;
