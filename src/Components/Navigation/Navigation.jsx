import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
	return (
		<>
			<div style={{ top: "0", left: "0", width: "100%" }} className="nav">
				<div className="nav-container">
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
				<hr
					style={{
						color: "white",
						border: "none",
						backgroundColor: "white",
						width: "100%",
						height: "1px",
					}}
				/>
			</div>
		</>
	);
};

export default Navigation;
