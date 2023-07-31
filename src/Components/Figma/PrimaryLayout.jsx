import React from "react";
import ResponsiveNav from "../Navigation/ResponsiveNav";

const PrimaryLayout = ({ infoSection, contentSection }) => {
	return (
		<div className="flex flex-col h-screen">
			<ResponsiveNav />
			<div className="mx-auto h-full sm:grid sm:grid-cols-3">
				<div className="h-3/4 sm:h-auto sm:col-span-2 sm:order-2 order-1">
					{contentSection}
				</div>
				<div className="h-1/4 sm:h-auto sm:col-span-1 sm:order-1 order-2">
					{infoSection}
				</div>
			</div>
		</div>
	);
};

export default PrimaryLayout;
