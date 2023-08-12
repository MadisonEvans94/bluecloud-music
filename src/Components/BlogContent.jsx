import React from "react";
import Header from "./Utility/Header";
import Paragraph from "./Utility/Paragraph";

// TODO
const BlogContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			id="blog"
			className={`pl-10 pr-24 flex flex-col justify-center my-auto relative h-screen bg-cover bg-center snap-center ${className}`}
		>
			<Header>Blogs</Header>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Accusantium eius totam amet soluta sequi possimus libero neque
				sapiente repudiandae voluptatem?
			</Paragraph>
		</div>
	);
});

export default BlogContent;
