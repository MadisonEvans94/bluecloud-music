import React from "react";
import PrimaryLayout from "../Components/PrimaryLayout";
import Header from "../Components/Header";
import Paragraph from "../Components/Paragraph";

const Left = () => {
	return (
		<>
			<div className="h-full flex">
				<div className="my-auto px-5">
					<Header>Store</Header>
					<Paragraph>Sample Packs, Plugins, and much more</Paragraph>
				</div>
			</div>
		</>
	);
};

const Right = () => {
	return (
		<>
			<div className="pl-10 pr-24 flex flex-col justify-center my-auto relative h-full bg-cover bg-center">
				<Header>Sample Pack</Header>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium eius totam amet soluta sequi possimus libero
					neque sapiente repudiandae voluptatem?
				</Paragraph>
			</div>
		</>
	);
};

const Store = () => {
	return (
		<div>
			<PrimaryLayout infoSection={<Left />} contentSection={<Right />} />
		</div>
	);
};

export default Store;
