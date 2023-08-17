import React from "react";

import BlogCard from "./BlogCard";
import sine from "../assets/Figma/icons/sine.svg";
import sample from "../assets/images/store_in_construction.png";
import chordGraph from "../assets/Figma/icons/chordGraph.svg";
import convolution from "../assets/Figma/icons/convolution.svg";
// TODO
const BlogContent = React.forwardRef(({ className, blogs }, ref) => {
	console.log("blogs: ", blogs);
	return (
		<div
			ref={ref}
			id="blog"
			className={`my-auto h-screen bg-cover bg-center snap-center ${className}`}
		>
			{/* {blogs.map((blog) => (
				<BlogCard blog={blog} key={blog.blogId} variation={1} />
			))} */}
			<div class="grid grid-cols-2 h-full gap-4 p-4">
				<div class="col-span-2 row-span-1">
					<BlogCard
						blog={blogs[0]}
						key={blogs[0].blogId}
						variation={0}
						imgSrc={sine}
					/>
				</div>
				<div class="col-span-1 row-span-2">
					<BlogCard
						blog={blogs[1]}
						key={blogs[1].blogId}
						variation={1}
						imgSrc={chordGraph}
					/>
				</div>
				<div class="col-span-1 row-span-2">
					<BlogCard
						blog={blogs[2]}
						key={blogs[2].blogId}
						variation={1}
						imgSrc={convolution}
					/>
				</div>
			</div>

			{/* <BlogCard blog={blogs[0]} key={blogs[0].blogId} variation={1} /> */}
		</div>
	);
});

export default BlogContent;
