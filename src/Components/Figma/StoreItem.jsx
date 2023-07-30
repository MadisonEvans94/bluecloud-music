import React from "react";

const StoreItem = () => {
	return (
		<div className="border relative border-info h-[390px] w-[390px] mx-auto rounded-lg overflow-hidden">
			<div className="bg-primary z-40 w-full h-32 absolute bottom-0" />
			<img
				className="object-cover h-full object-center "
				src="https://plus.unsplash.com/premium_photo-1681433368405-70c0d1205831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
				alt="item-img"
			/>
		</div>
	);
};

export default StoreItem;
