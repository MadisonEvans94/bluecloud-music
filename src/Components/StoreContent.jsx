import React from "react";
import Paragraph from "./Utility/Paragraph";
import Subheader from "./Utility/Subheader";
import storePlaceholder from "../assets/images/store_in_construction.png";

const StoreContent = React.forwardRef(({ className, storeItems }, ref) => {
	return (
		<div
			ref={ref}
			id="store"
			className={`h-screen pl-10 pr-24 flex flex-col justify-center my-auto relative snap-center ${className}`}
		>
			<div className="flex flex-col items-center justify-center h-full relative">
				<Subheader>Under Construction...</Subheader>
				<img
					className="object-contain w-full max-h-[600px] "
					src={storePlaceholder}
					alt=""
				/>
				<Paragraph>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Blanditiis iure iste aliquid doloribus tempore fugit quidem
					error labore non corporis, eligendi, officia nesciunt iusto
					sunt sint tempora at debitis architecto.
				</Paragraph>
			</div>
		</div>
	);
});

export default StoreContent;

{
	/* <div className="w-full mx-auto h-fit flex flex-col items-center">
	<Header>asdf</Header>
	<div className="w-96 h-96">
		<img
			src="https://freesvg.org/img/tapecassette.png"
			alt=""
		/>
	</div>
	<Subheader>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit.
		Quibusdam dolor sed autem fuga a laborum. Quasi cum ut
		mollitia sapiente, impedit fugit, numquam, voluptatem est
		aperiam ducimus magnam id dignissimos.
	</Subheader>
</div> */
}
