import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
	const { pk } = useParams();
	return <div>BlogDetail {pk}</div>;
};

export default BlogDetail;
