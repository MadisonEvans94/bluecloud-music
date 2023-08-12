import React from "react";
import Subheader from "./Subheader";
import Paragraph from "./Paragraph";

// TODO:
// [ ] add functionality for linking to new page

const BlogCard = ({ blog }) => {
	return (
		<div className="cursor-pointer border rounded-lg pb-5 px-5">
			<Subheader text={blog.title} />
			<Paragraph>{blog.description}</Paragraph>
		</div>
	);
};

export default BlogCard;
