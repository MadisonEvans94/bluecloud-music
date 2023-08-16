import React from "react";
import Subheader from "./Utility/Subheader";
import Paragraph from "./Utility/Paragraph";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, version }) => {
	return (
		<Link to={`/blogs/${blog.blogId}`}>
			<div className="cursor-pointer border rounded-lg pb-5 px-5">
				<Subheader text={blog.title} />
				<Paragraph>{blog.shortDescription}</Paragraph>
			</div>
		</Link>
	);
};

export default BlogCard;
