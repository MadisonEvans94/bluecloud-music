import React from "react";
import Header from "./Utility/Header";
import Subheader from "./Utility/Subheader";

const StoreContent = React.forwardRef(({ className, storeItems }, ref) => {
	return (
		<div
			ref={ref}
			id="store"
			className={`h-screen pl-10 pr-24 flex flex-col justify-center my-auto relative snap-center ${className}`}
		>
			<div className="border w-full mx-auto h-fit flex flex-col items-center">
				<Header>asdf</Header>
				<div className="w-96 h-96 border">
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
			</div>
		</div>
	);
});

export default StoreContent;
