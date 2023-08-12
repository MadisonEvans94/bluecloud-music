import React from "react";
import Subheader from "./Utility/Subheader";
import Paragraph from "./Utility/Paragraph";

// TODO:
// [ ] add functionality for linking to new page

const BlogCard = ({ blog }) => {
	return (
		<div className="cursor-pointer border rounded-lg pb-5 px-5">
			<Subheader text={blog.title} />
			<Paragraph>{blog.shortDescription}</Paragraph>
		</div>
	);
};

export default BlogCard;