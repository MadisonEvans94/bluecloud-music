import React from "react";
import Header from "./Header";
import SubHeader from "./Subheader";
import Paragraph from "./Paragraph";
import AudioPlayer from "./AudioPlayer";

const ItemDetails = () => {
	return (
		<div className="px-5">
			<Header>Alure</Header>
			<ItemDetailsCard />
			<SubHeader>Product Summary</SubHeader>
			<Paragraph>
				This is the main description for my newest sample pack. But in
				reality it's just a placeholder. I just need some text to fill
				in the blank space so that I can get a good visual
				representation of what my mobile application will look like
				eventually.This is the main description for my newest sample
				pack. But in reality it's just a placeholder. I just need some
				text to fill in the blank space so that I can get a good visual
				representation of what my mobile application will look like
				eventually. This is the main description for my newest sample
				pack. But in reality it's just a placeholder. I just need some
				text to fill in the blank space so that I can get a good visual
				representation of what my mobile application will look like
				eventually.
			</Paragraph>
			<SubHeader>What's Included?</SubHeader>
			<ul className="text-info">
				<li>45 percussion loops</li>
				<li>64 melodic samples</li>
				<li>6 808 samples</li>
				<li>34 kicks</li>
				<li>12 snares </li>
				<li>34 vocal effects</li>
			</ul>
			<SubHeader>Demo</SubHeader>
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
