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
		<div>
			<Header>{dbData[pk].title}</Header>
			<Subheader>{dbData[pk].shortDescription}</Subheader>
			{dbData[pk].content.map((content, i) => {
				if (content.type === "paragraph") {
					return <Paragraph key={i}>{content.info}</Paragraph>;
				} else if (content.type === "image") {
					return (
						<div key={i}>
							<div className="h-96 max-w-xl overflow-hidden">
								<img
									className="w-full h-full object-cover object-center"
									src={content.info.url}
									alt={content.info.caption}
								/>
							</div>

							<p className="text-info">{content.info.caption}</p>
						</div>
					);
				}
			})}
		</div>
	);
};

export default BlogDetail;
