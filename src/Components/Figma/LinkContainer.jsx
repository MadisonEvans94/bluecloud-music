import React from "react";

const LinkContainer = ({ icons }) => {
	return (
		<div className="mx-auto h-[110px] rounded-full flex flex-row justify-center items-center border border-info w-[390px]">
			{icons.map((icon, i) => {
				return (
					<a href={icon.link}>
						<img
							className="w-[48px] -translate-x-1/2 cursor-pointer h-[48px] ml-[35px] drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition"
							src={icon.icon}
							key={i}
							alt="link"
						/>
					</a>
				);
			})}
		</div>
	);
};

export default LinkContainer;
