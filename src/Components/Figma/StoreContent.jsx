import React from "react";
import Carousel from "./Carousel";
import StoreItem from "./StoreItem";

// TODO
// [x] import store item
// [x] create fake list of store items
// [x] import carousel
// [ ] fix the width of the store item to be full of parent container
// [ ] integrate carousel with store items
// [ ] make carousel buttons functional
// [ ] make it pretty
// [ ] make the shopping cart button functional

const storeItems = [
	<StoreItem
		itemName="item 1"
		itemDescription="placeholder for sample pack 1"
		imageSrc="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
	/>,
	<StoreItem
		itemName="item 2"
		itemDescription="placeholder for sample pack 2"
		imageSrc="https://images.unsplash.com/photo-1618331833071-ce81bd50d300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
	/>,
	<StoreItem
		itemName="item 3"
		itemDescription="placeholder for sample pack 3"
		imageSrc="https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
	/>,
];

const StoreContent = React.forwardRef(({ className }, ref) => {
	return (
		<div
			ref={ref}
			id="store"
			className={`h-screen pl-10 pr-24 flex flex-col justify-center my-auto relative snap-center ${className}`}
		>
			<Carousel items={storeItems} />
		</div>
	);
});

export default StoreContent;
