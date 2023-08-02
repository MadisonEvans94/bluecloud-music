import React from "react";
import Header from "./Header";
import SubHeader from "./Subheader";

const ItemDetails = () => {
	return (
		<div>
			<Header>Alure</Header>
			<ItemDetailsCard />
		</div>
	);
};

export default ItemDetails;

function ItemDetailsCard() {
	return (
		<div className="w-full ">
			<div className="h-96 overflow-hidden flex flex-row  mx-auto w-full justify-center">
				<img
					className="object-cover h-full w-96"
					src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
					alt="image"
				/>
				<div className=" w-96 flex flex-col text-info px-5">
					<div className="flex flex-row justify-between">
						<div>Subtotal</div>
						<div>34</div>
					</div>
					<div className="flex flex-row justify-between">
						<div>tax</div>
						<div>45</div>
					</div>
					<hr />
					<div className="flex flex-row justify-between">
						<div>total</div>
						<div>69</div>
					</div>
					<button className="rounded bg-secondary p-5">
						purchase
					</button>
				</div>
			</div>
		</div>
	);
}
