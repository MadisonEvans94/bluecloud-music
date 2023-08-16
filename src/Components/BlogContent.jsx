import React from "react";

import BlogCard from "./BlogCard";

// TODO
const BlogContent = React.forwardRef(({ className, blogs }, ref) => {
	console.log("blogs: ", blogs);
	return (
		<div
			ref={ref}
			id="blog"
			className={`pl-10 pr-24 flex flex-col justify-center my-auto relative h-screen bg-cover bg-center snap-center ${className}`}
		>
			{/* TODO: update the indexing */}
			{blogs.map((blog) => (
				<BlogCard blog={blog} key={blog.blogId} version={1} />
			))}
		</div>
	);
});

export default BlogContent;
