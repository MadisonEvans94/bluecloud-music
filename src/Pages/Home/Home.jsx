import React from "react";
import ProductCard from "../../Components/Card/ProductCard";
import Navigation from "../../Components/Navigation/Navigation";

const Home = () => {
	const backgroundImg =
		"https://marketplace.canva.com/EAFJ9TROiw8/1/0/1600w/canva-renaissance-bust-vaporwave-aesthetic-album-cover-SVO6_i94IGk.jpg";
	const title = "Blue Tape Vol: 1";
	const description =
		"Introducing a new music sample pack for producers and beat-makers. This pack offers a diverse collection of high-quality samples, including drums, synths, basslines, and more. Suitable for various genres, elevate your productions with this must-have pack. Get your copy now!";
	const price = "$30";

	return (
		<>
			<div
				style={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
				}}>
				<Navigation />
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
