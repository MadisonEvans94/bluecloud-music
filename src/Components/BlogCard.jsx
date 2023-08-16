import React from "react";
import Subheader from "./Utility/Subheader";
import Paragraph from "./Utility/Paragraph";
import { Link } from "react-router-dom";
import sample from "../assets/images/store_in_construction.png";

const BlogCard = ({ blog, variation }) => {
	switch (variation) {
		case 0:
			return (
				<Link to={`/blogs/${blog.blogId}`}>
					<div className="cursor-pointer border rounded-lg pb-5 px-5 w-full h-full flex flex-row items-center">
						<div>
							<Subheader text={blog.title} />
							<Paragraph>{blog.shortDescription}</Paragraph>
						</div>
						<div className="w-full">
							{/* <img
								className="object-contain"
								src={sample}
								alt="blog-pic"
							/> */}
						</div>
					</div>
				</Link>
			);
		case 1:
			return (
				<Link to={`/blogs/${blog.blogId}`}>
					<div className="cursor-pointer border rounded-lg pb-5 px-5 w-full h-full flex flex-col justify-between">
						<div>
							<Subheader text={blog.title} />
							<Paragraph>{blog.shortDescription}</Paragraph>
						</div>

						<div className="object-contain h-full flex flex-col justify-center">
							{/* <img src={sample} alt="asdf" /> */}
						</div>
					</div>
				</Link>
			);
		default:
			return <></>;
	}
};

export default BlogCard;
