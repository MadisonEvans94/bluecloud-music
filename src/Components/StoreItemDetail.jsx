import React from "react";
import Header from "./Utility/Header";
import SubHeader from "./Utility/Subheader";
import Paragraph from "./Utility/Paragraph";
import AudioPlayer from "./Utility/AudioPlayer";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
	const { dbData } = useContext(AppContext);
	const { pk } = useParams();
	const item = dbData[pk];
	return (
		<div className="px-5">
			<Header>{item.title}</Header>
			<ItemDetailsCard img={item.imgUrl} />
			<SubHeader>Summary</SubHeader>
			<Paragraph>{item.longDescription}</Paragraph>
			<SubHeader>What's Included</SubHeader>
			<ul className="text-info">
				{item.whatIsIncluded.map((item, i) => {
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

function ItemDetailsCard({ img }) {
	return (
		<div className="w-full ">
			<div className="h-96 overflow-hidden flex flex-row  mx-auto w-full justify-center">
				<img
					className="object-cover h-full w-96"
					src={img}
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
