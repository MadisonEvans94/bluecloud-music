import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import Paragraph from "./Paragraph";

const Blog = ({
	title = "title",
	date = "mm/dd/yyyy",
	content = [
		<Paragraph>asdfasdf</Paragraph>,
		<Paragraph>asdfasdf</Paragraph>,
		<Paragraph>asdfasdf</Paragraph>,
	],
}) => {
	return (
		<>
			<Header text={title} />
			<Subheader text={date} />
			{content.map((contentSection) => {
				return contentSection;
			})}
		</>
	);
};

export default Blog;
