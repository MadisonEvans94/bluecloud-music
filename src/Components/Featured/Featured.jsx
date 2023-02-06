import React from "react";

const Featured = ({ featuredImg }) => {
	return (
		<div className="featured-container">
			<h1 className="featured-title">Featured</h1>
			<div className="featured-card">
				<div className="featured-content">
					<img src={featuredImg} alt="" />
					<p className="featured-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt
						voluptatum veniam eligendi magni quaerat voluptas illo blanditiis
						earum omnis, soluta ipsam, eveniet est. Recusandae ut rum dolor aut!
						Delectus nulla in corrupti eum iure rerum maiores voluptatibus sint
						iste quidem, beatae sunt.
					</p>
				</div>

				{/* <p className="featured-links">
							<ul>
								<li>spotify</li>
								<li>apple music</li>
								<li>bad snacks page</li>
							</ul>
						</p> */}
			</div>
		</div>
	);
};

export default Featured;
