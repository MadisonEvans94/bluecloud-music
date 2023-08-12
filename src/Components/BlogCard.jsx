import React from "react";
import Subheader from "./Utility/Subheader";
import Paragraph from "./Utility/Paragraph";
import { Link } from "react-router-dom";

// TODO:
// [x] add functionality for linking to new page

const BlogCard = ({ blog }) => {
	return (
		<Link to="/blogs/1">
			<div className="cursor-pointer border rounded-lg pb-5 px-5">
				<Subheader text={blog.title} />
				<Paragraph>{blog.shortDescription}</Paragraph>
			</div>
		</Link>
	);
};

export default BlogCard;
