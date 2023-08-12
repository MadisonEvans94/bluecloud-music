import { useState, useEffect } from "react";

const useFetchData = (jsonFile) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(jsonFile);
				if (!response.ok) {
					throw new Error("Error fetching data");
				}
				const jsonData = await response.json();
				setData(jsonData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [jsonFile]);

	return { data, loading, error };
};

export default useFetchData;
