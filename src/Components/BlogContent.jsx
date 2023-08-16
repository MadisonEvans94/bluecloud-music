import React from "react";

import BlogCard from "./BlogCard";

// TODO
const BlogContent = React.forwardRef(({ className, blogs }, ref) => {
	console.log("blogs: ", blogs);
	return (
		<div
			ref={ref}
			id="blog"
			className={`my-auto h-screen bg-cover bg-center snap-center ${className}`}
		>
			{/* TODO: update the indexing */}
			{/* {blogs.map((blog) => (
				<BlogCard blog={blog} key={blog.blogId} variation={1} />
			))} */}
			<div class="grid grid-cols-2 h-full">
				<div class="col-span-2 row-span-1 p-4">
					<BlogCard
						blog={blogs[0]}
						key={blogs[0].blogId}
						variation={0}
					/>
				</div>
				<div class="col-span-1 row-span-2 p-4">
					<BlogCard
						blog={blogs[1]}
						key={blogs[1].blogId}
						variation={1}
					/>
				</div>
				<div class="col-span-1 row-span-2 p-4">
					<BlogCard
						blog={blogs[2]}
						key={blogs[2].blogId}
						variation={1}
					/>
				</div>
			</div>

			{/* <BlogCard blog={blogs[0]} key={blogs[0].blogId} variation={1} /> */}
		</div>
	);
});

export default BlogContent;
