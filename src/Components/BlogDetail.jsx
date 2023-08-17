import React from "react";
import { useParams } from "react-router-dom";
import AppContext from "../Context/AppContext";
import { useContext } from "react";
import Header from "./Utility/Header";
import Subheader from "./Utility/Subheader";
import Paragraph from "./Utility/Paragraph";

const BlogDetail = () => {
	const { dbData } = useContext(AppContext);
	const { pk } = useParams();

	return (
		<div className="px-8">
			<Header>{dbData[pk].title}</Header>
			<Paragraph>{dbData[pk].shortDescription}</Paragraph>
			{dbData[pk].content.map((content, i) => {
				if (content.type === "paragraph") {
					return (
						<>
							<Subheader className="mb-8">
								{content.subHeader}
							</Subheader>
							<Paragraph className="mb-8" key={i}>
								{content.info}
							</Paragraph>
						</>
					);
				} else if (content.type === "image") {
					return (
						<div key={i} className="w-full my-4">
							<div className="h-96 max-w-xl overflow-hidden w-full mx-auto">
								<img
									className="w-full h-full object-cover object-center"
									src={content.info.url}
									alt={content.info.caption}
								/>
							</div>

							<p className="text-info mx-auto w-full text-center">
								{content.info.caption}
							</p>
						</div>
					);
				} else {
					return <></>;
				}
			})}
		</div>
	);
};

export default BlogDetail;
