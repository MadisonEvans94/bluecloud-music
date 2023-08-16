import React from "react";
import Subheader from "./Utility/Subheader";
import Paragraph from "./Utility/Paragraph";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, variation }) => {
	switch (variation) {
		case 0:
			return (
				<Link to={`/blogs/${blog.blogId}`}>
					<div className="cursor-pointer border rounded-lg pb-5 px-5 w-full h-full">
						<Subheader text={blog.title} />
						<Paragraph>{blog.shortDescription}</Paragraph>
					</div>
				</Link>
			);
		case 1:
			return (
				<Link to={`/blogs/${blog.blogId}`}>
					<div className="cursor-pointer border rounded-lg pb-5 px-5 w-full h-full">
						<Subheader text={blog.title} />
						<Paragraph>{blog.shortDescription}</Paragraph>
					</div>
				</Link>
			);
		default:
			return <></>;
	}
};

export default BlogCard;
