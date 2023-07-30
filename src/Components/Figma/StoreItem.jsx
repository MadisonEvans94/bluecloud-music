import React from "react";
import Subheader from "./Subheader";
import Paragraph from "./Paragraph";

const StoreItem = () => {
	return (
		<div className="cursor-pointer border relative border-info h-[390px] w-[390px] mx-auto rounded-lg overflow-hidden">
			<div className="bg-primary z-40 w-full h-32 absolute bottom-0 px-5">
				<h2 className="mt-5 text-info text-subHeadingMobile">
					Store Item
				</h2>
				<p className="text-info">
					Lorem ipsum dolor sit amet conseur adipisicing elit. Sit
				</p>
			</div>
			<img
				className="object-cover h-full object-center "
				src="https://plus.unsplash.com/premium_photo-1681433368405-70c0d1205831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
				alt="item-img"
			/>
		</div>
	);
};

export default StoreItem;
