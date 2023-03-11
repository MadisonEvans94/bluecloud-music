import React from "react";
import ProductCard from "../../Components/Card/ProductCard";
import "./Store.css";
import productImg from "../../assets/images/product-image.png";
const ProductPage = () => {
	//assets/images/honeypack.png";

	const title = "Blue Tape Vol: 1 (Coming Soon)";
	const description =
		"Introducing a new music sample pack for producers and beat-makers. This pack offers a diverse collection of high-quality samples, including drums, synths, basslines, and more. Suitable for various genres, elevate your productions with this must-have pack get added to the email list and get notified when it drops!";
	const price = "$30";

	return (
		<>
			<div className="store-page-container">
				<ProductCard
					title={title}
					description={description}
					backgroundImg={productImg}
					price={price}
				/>
			</div>
		</>
	);
};

export default ProductPage;
