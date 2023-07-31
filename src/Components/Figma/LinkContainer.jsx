import React from "react";

const LinkContainer = ({ icons, className }) => {
	return (
		<div
			className={`mx-auto h-[110px] rounded-full flex flex-row justify-around items-center border border-info w-full ${className}`}
		>
			{icons.map((icon, i) => {
				return (
					<a href={icon.link}>
						<img
							className="w-[48px cursor-pointer h-[48px] drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition"
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
