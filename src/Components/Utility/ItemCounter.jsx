import React from "react";

const ItemCounter = () => {
	function handleClick(e) {
		if (e.target.textContent === "+") {
			console.log("add");
		}
		if (e.target.textContent === "-") {
			console.log("remove");
		}
	}
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					backgroundColor: "white",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<div>Add to Basket</div>
				<div style={{ display: "flex" }}>
					<div
						style={{
							margin: "0 .25rem",
							padding: ".25rem",
							backgroundColor: "pink",
						}}
						onClick={(e) => handleClick(e)}>
						-
					</div>
					<div style={{ marginBlock: "auto" }}>6</div>
					<div
						style={{
							margin: "0 .25rem",
							padding: ".25rem",
							backgroundColor: "pink",
						}}
						onClick={(e) => handleClick(e)}>
						+
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemCounter;
