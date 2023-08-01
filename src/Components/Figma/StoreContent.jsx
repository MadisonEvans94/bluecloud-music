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

const TestDiv = ({ text }) => {
	return (
		<>
			<div className="border border-info w-full">{text}</div>
		</>
	);
};

const storeItems = [<TestDiv text="1" />, <TestDiv text="2" />];

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
