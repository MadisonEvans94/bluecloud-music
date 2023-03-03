import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { FaBars as Hamburger } from "react-icons/fa";
const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	function toggleShowLinks() {
		setShowLinks((prev) => !prev);
		console.log(showLinks);
	}
	return (
		<div className="navbar">
			<div
				className="links-container"
				id={showLinks ? "dropdown-visible" : "dropdown-hidden"}>
				<div className="links">
					<Link to="/home/store">Store</Link>
				</div>
				<div className="links">
					<Link to="/home/music">Music</Link>
				</div>
				<div className="links">
					<Link to="/home/contact">Contact</Link>
				</div>
			</div>

			<Hamburger
				className="hamburger-button"
				size="100%"
				onClick={toggleShowLinks}
			/>
		</div>
	);
};

export default Navbar;
