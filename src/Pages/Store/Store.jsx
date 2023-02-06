import React from "react";
import ProductCard from "../../Components/Card/ProductCard";
import "./Store.css";
const background =
	"https://marketplace.canva.com/EAFJ9TROiw8/1/0/1600w/canva-renaissance-bust-vaporwave-aesthetic-album-cover-SVO6_i94IGk.jpg";
const ProductPage = () => {
	//assets/images/honeypack.png";

	const title = "Blue Tape Vol: 1 (Coming Soon)";
	const description =
		"Introducing a new music sample pack for producers and beat-makers. This pack offers a diverse collection of high-quality samples, including drums, synths, basslines, and more. Suitable for various genres, elevate your productions with this must-have pack. Get your copy now!";
	const price = "$30";

	return (
		<>
			<div className="store-page-container">
				<ProductCard
					title={title}
					description={description}
					backgroundImg={background}
					price={price}
				/>
			</div>
		</>
	);
};

export default ProductPage;
