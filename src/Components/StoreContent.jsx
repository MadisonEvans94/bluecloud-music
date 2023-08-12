import React from "react";
import StoreItem from "./StoreItem";

const StoreContent = React.forwardRef(({ className, storeItems }, ref) => {
	return (
		<div
			ref={ref}
			id="store"
			className={`h-screen pl-10 pr-24 flex flex-col justify-center my-auto relative snap-center ${className}`}
		>
			<StoreItem
				title={storeItems[0].title}
				imgUrl={storeItems[0].imgUrl}
				shortDescription={storeItems[0].shortDescription}
			/>
		</div>
	);
});

export default StoreContent;
