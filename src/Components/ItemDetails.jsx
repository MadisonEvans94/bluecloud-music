import React from "react";
import Header from "./Header";
import SubHeader from "./Subheader";
import Paragraph from "./Paragraph";
import AudioPlayer from "./AudioPlayer";
import { useContext } from "react";
import AppContext from "./Context/AppContext";

const ItemDetails = () => {
	const { currentStoreItem } = useContext(AppContext);
	return (
		<div className="px-5">
			<Header>{currentStoreItem.itemName}</Header>
			<ItemDetailsCard />
			<SubHeader>Product Summary</SubHeader>
			<Paragraph>{currentStoreItem.itemSummary}</Paragraph>
			<SubHeader>What's Included?</SubHeader>
			<ul className="text-info">
				{currentStoreItem.itemElements.map((item, i) => {
					return <li key={i}>{item}</li>;
				})}
			</ul>
			<SubHeader>Demo</SubHeader>
			{/* TODO: add url as prop to AudioPlayer */}
			<AudioPlayer />
			<SubHeader>Usage Details</SubHeader>
			<ul className="text-info">
				<li>
					All sounds and loops are 100% royalty free - no clearance
					required
				</li>
				<li>
					All sounds are crafted, sculpted, specially designed to
					KNOCK / punch through your mix
				</li>
				<li>
					All sounds are 100% original and crafted from scratch (no
					recycled sounds)
				</li>
				<li>
					All loops are labeled with tempo, key, and ready to drop
					right into your DAW with no editing required
				</li>
				<li>All sounds are in 24bit/44.1kHz format</li>
				<li>
					All sounds and loops are compatible with any DAW software or
					beat machine (Ableton, FL Studio, Logic, Reason, MPC,
					Maschine, Studio One, etc) kit ever
				</li>
				<li>
					All 808s and One Shots are tuned to C for easy playability
				</li>
			</ul>
		</div>
	);
};

function ItemDetailsCard() {
	return (
		<div className="w-full ">
			<div className="h-96 overflow-hidden flex flex-row  mx-auto w-full justify-center">
				<img
					className="object-cover h-full w-96"
					src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
					alt="details"
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

export default ItemDetails;
