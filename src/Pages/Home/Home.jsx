import React from "react";
// TODO:
// [ ] header component
// [ ] subheader component
// [ ] audio player component
// [ ] link container component
// [ ] blog card component
const Home = () => {
	return (
		<>
			<h1>Header</h1>
			<h2>subheader</h2>
			<div>audio player</div>
			{LinkContainer()}
			{BlogCard()}
		</>
	);
};

export default Home;
function LinkContainer() {
	return <div>link container</div>;
}

function BlogCard() {
	return <div>blog card</div>;
}
