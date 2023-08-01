import React from "react";
import shoppingCart from "../../assets/Figma/icons/shoppingCart.svg";
import { useNavigate } from "react-router-dom";

const StoreItem = ({
	itemName = "item",
	imageSrc = "",
	itemDescription,
	className,
}) => {
	const navigate = useNavigate();
	const showItemDetails = () => {
		navigate("/itemDetails");
	};
	return (
		<div
			className={`my-auto w-full max-w-5xl border relative border-info h-full mx-auto rounded-[32px] overflow-hidden ${className}`}
		>
			<div className="bg-primary flex flex-row items-center z-40 w-full h-32 absolute bottom-0 px-3">
				<div>
					<h2 className=" text-info text-subHeadingMobile">
						{itemName}
					</h2>
					<p className="text-info">{itemDescription}</p>
				</div>

				<img
					className="absolute bottom-4 right-4 cursor-pointer drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition"
					src={shoppingCart}
					alt="checkout"
				/>
			</div>
			<img
				className="cursor-pointer object-cover h-full w-full object-center "
				src={imageSrc}
				alt="item-img"
				onClick={showItemDetails}
			/>
		</div>
	);
};

export default StoreItem;