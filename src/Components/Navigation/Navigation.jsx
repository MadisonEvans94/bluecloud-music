// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars as Hamburger } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import "./Navigation.css";
// const asdf = "hamburger";
// const Navigation = () => {
// 	const [dropdownVisibility, setDropdownVisibility] = useState("block");

// 	function handleClick() {
// 		setDropdownVisibility((prev) => {
// 			if (prev === "none") {
// 				return "block";
// 			} else {
// 				return "none";
// 			}
// 		});
// 		console.log(dropdownVisibility);
// 	}
// 	return (
// 		<>
// 			<div className="nav">
// 				<div className="nav-container">
// 					{/* <Hamburger
// 						className="hamburger"
// 						style={{ display: dropdownVisibility }}
// 						size="100%"
// 						onClick={handleClick}
// 					/> */}
// 					<div>
// 						<Link className="navlink alt-header" to="/home/store">
// 							Store
// 						</Link>
// 					</div>
// 					<div>
// 						<Link className="navlink alt-header" to="/home/music">
// 							Music
// 						</Link>
// 					</div>
// 					<div>
// 						<Link className="navlink alt-header" to="/home/contact">
// 							Contact
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Navigation;
