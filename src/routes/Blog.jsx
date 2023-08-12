import React from "react";
import Header from "../Components/Header";
import Subheader from "../Components/Subheader";
import Paragraph from "../Components/Paragraph";
import ImageContainer from "../Components/ImageContainer";

const Blog = ({
	title = "title",
	date = "mm/dd/yyyy",
	content = [
		<Paragraph>asdfasdf</Paragraph>,
		<Paragraph>asdfasdf</Paragraph>,
		<Paragraph>asdfasdf</Paragraph>,
		<ImageContainer src="https://images.unsplash.com/photo-1689947768186-d078ee2db0b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" />,
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
