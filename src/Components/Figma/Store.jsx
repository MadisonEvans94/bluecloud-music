import React from "react";
import StoreItem from "./StoreItem";
import Header from "./Header";

const storeItems = [
	{
		itemName: "foo",
		itemDescription: "bar",
		imageSrc:
			"https://plus.unsplash.com/premium_photo-1681433368405-70c0d1205831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60",
	},
	{
		itemName: "foo",
		itemDescription: "bar",
		imageSrc:
			"https://plus.unsplash.com/premium_photo-1671211326876-82fc00e80590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	},
	{
		itemName: "foo",
		itemDescription: "bar",
		imageSrc:
			"https://images.unsplash.com/photo-1689850969062-f7e0a6c45a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
	},
];
const Store = () => {
	return (
		<div>
			<Header text="Store" />
			{storeItems.map((storeItem, i) => {
				return (
					<StoreItem
						key={i}
						itemName={storeItem.itemName}
						itemDescription={storeItem.itemDescription}
						imageSrc={storeItem.imageSrc}
					/>
				);
			})}
		</div>
	);
};

export default Store;
