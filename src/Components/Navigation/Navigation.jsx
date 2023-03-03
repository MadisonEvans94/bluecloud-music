import React from "react";
import { Link } from "react-router-dom";
import { FaBars as Hamburger } from "react-icons/fa";
import "./Navigation.css";
const Navigation = () => {
	return (
		<>
			<div className="nav">
				<div className="nav-container">
					<Hamburger
						className="hamburger"
						size="100%"
						style={{ strokeWidth: 1 }}
					/>
					<div>
						<Link className="navlink" to="/home/store">
							Store
						</Link>
					</div>
					<div>
						<Link className="navlink" to="/home/music">
							Music
						</Link>
					</div>
					<div>
						<Link className="navlink" to="/home/contact">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navigation;
