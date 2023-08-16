import React from "react";

const LinkContainer = ({ icons, className }) => {
	return (
		<div
			className={`mx-auto mt-16 rounded-full flex flex-row justify-center items-center w-full ${className}`}
		>
			{icons.map((icon, i) => {
				return (
					<a href={icon.link} key={i}>
						<img
							className="w-[40px cursor-pointer mx-4 h-[40px] drop-shadow-default hover:drop-shadow-hover active:drop-shadow-active transition"
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
