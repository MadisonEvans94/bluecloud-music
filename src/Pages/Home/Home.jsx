import React from "react";
import ProductCard from "../../Components/Card/ProductCard";

const Home = () => {
	/**
	 * A card component that displays a background image, title, description, and price
	 *
	 * @param {string} backgroundImg - The URL of the background image
	 * @param {string} title - The title to be displayed
	 * @param {string} description - The description to be displayed
	 * @param {string} price - The price to be displayed
	 */

	const backgroundImg =
		"https://marketplace.canva.com/EAFJ9TROiw8/1/0/1600w/canva-renaissance-bust-vaporwave-aesthetic-album-cover-SVO6_i94IGk.jpg";
	const title = "Parthanon";
	const description =
		"Introducing a new music sample pack for producers and beat-makers. This pack offers a diverse collection of high-quality samples, including drums, synths, basslines, and more. Suitable for various genres, elevate your productions with this must-have pack. Get your copy now!";
	const price = "$30";

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
				}}>
				<ProductCard
					title={title}
					description={description}
					backgroundImg={backgroundImg}
					price={price}
				/>
			</div>
		</>
	);
};

export default Home;
