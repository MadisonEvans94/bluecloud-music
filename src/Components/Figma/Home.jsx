import React, { useRef, useEffect, useState } from "react";
import PrimaryLayout from "./PrimaryLayout";
import BlogContent from "./BlogContent";
import ContactContent from "./ContactContent";
import MusicContent from "./MusicContent";
import StoreContent from "./StoreContent";
import StoreInfo from "./StoreInfo";
import MusicInfo from "./MusicInfo";
import BlogInfo from "./BlogInfo";
import ContactInfo from "./ContactInfo";

const Home = () => {
	const [infoSection, setInfoSection] = useState(<MusicInfo />); // setting initial state to MusicInfo

	const musicRef = useRef();
	const storeRef = useRef();
	const blogRef = useRef();
	const contactRef = useRef();

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
						<MusicContent ref={musicRef} />
						<StoreContent ref={storeRef} />
						<BlogContent ref={blogRef} />
						<ContactContent ref={contactRef} />
					</>
				}
			/>
		</>
	);
};

export default Home;
