import React, { useRef, useEffect, useState } from "react";
import PrimaryLayout from "../Components/Layout/PrimaryLayout";
import BlogContent from "../Components/BlogContent";
import ContactContent from "../Components/ContactContent";
import MusicContent from "../Components/MusicContent";
import StoreContent from "../Components/StoreContent";
import StoreInfo from "../Components/StoreInfo";
import MusicInfo from "../Components/MusicInfo";
import BlogInfo from "../Components/BlogInfo";
import ContactInfo from "../Components/ContactInfo";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

const Home = () => {
	const [infoSection, setInfoSection] = useState(<MusicInfo />);
	const musicRef = useRef();
	const storeRef = useRef();
	const blogRef = useRef();
	const contactRef = useRef();

	const { dbData } = useContext(AppContext);
	console.log("dbData: ", dbData);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						switch (entry.target.id) {
							case "music":
								setInfoSection(<MusicInfo />);
								break;
							case "store":
								setInfoSection(<StoreInfo />);
								break;
							case "blog":
								setInfoSection(<BlogInfo />);
								break;
							case "contact":
								setInfoSection(<ContactInfo />);
								break;

							default:
								setInfoSection(<MusicInfo />);
								break;
						}
					}
				});
			},
			{
				threshold: 1, // trigger callback when at least 10% of the target is visible
			}
		);

		if (musicRef.current) {
			observer.observe(musicRef.current);
		}

		if (storeRef.current) {
			observer.observe(storeRef.current);
		}
		if (blogRef.current) {
			observer.observe(blogRef.current);
		}

		if (contactRef.current) {
			observer.observe(contactRef.current);
		}
	}, []);

	return (
		<>
			<PrimaryLayout
				infoSection={infoSection}
				contentSection={
					<>
						<MusicContent ref={musicRef} featured={dbData[0]} />
						<StoreContent
							ref={storeRef}
							storeItems={[
								dbData[4],
								dbData[5],
								dbData[6],
								dbData[7],
								dbData[8],
							]}
						/>
						<BlogContent
							ref={blogRef}
							blogs={[dbData[1], dbData[2], dbData[3]]}
						/>
						<ContactContent ref={contactRef} />
					</>
				}
			/>
		</>
	);
};

export default Home;
