import React from "react";
import Carousel from "./Carousel";
import StoreItem from "./StoreItem";

// TODO
// [x] import store item
// [x] create fake list of store items
// [x] import carousel
// [x] fix the width of the store item to be full of parent container
// [x] integrate carousel with store items
// [x] make carousel buttons functional
// [ ] disable buttons when end of list is reached
// [ ] add framer motion transition
// [ ] make it pretty
// [ ] make the shopping cart button functional

const TestDiv = ({ text }) => {
	return (
		<>
			<div className="border border-info w-full">{text}</div>
		</>
	);
};

const storeItems = [
	<StoreItem
		itemDescription="a cool sample pack"
		imageSrc="https://images.unsplash.com/photo-1690294893706-b0a945dd8ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
		itemName="sample pack 1!"
	/>,
	<StoreItem
		itemDescription="another one"
		imageSrc="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
		itemName="sample pack 1!"
	/>,
	<StoreItem
		itemDescription="a cool sample pack"
		imageSrc="https://images.unsplash.com/photo-1690294893706-b0a945dd8ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
		itemName="sample pack 1!"
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
