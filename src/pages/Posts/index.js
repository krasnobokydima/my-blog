import React, { useState, useEffect } from "react";
// import { useOutletContext } from "react-router-dom";
import { getDataFromServer } from "../../api";

import { CustomLoader } from "../../components/Loader";
import { Pagination } from "../../components/Pagination/Pagination";
import { Post } from "../Post";

export const Posts = () => {
	const [data, setData] = useState(null);
	const [paginationFromServer, setPaginationFromServer] = useState({});

	useEffect(
		() => async () => {
			const { data, pagination } = await getDataFromServer('/posts');

			setData(data);
			setPaginationFromServer(pagination);
		},
		[]
	);

	const handlePage = async (page) => {
		setData(null);
		const skipping = `?&skip=${(page - 1) * 10}`;
		const { 
			data,
			pagination, 
		} = await getDataFromServer('/posts', skipping);

		setData(data);
		setPaginationFromServer(pagination);
	};

	return (
		<>
			{data ? (
				<>
					{data.map((el) => (
						<Post post={el} key={el._id} />
					))}
				</>
			) : (
				<CustomLoader />
			)}
			
			<Pagination paginationFromServer={paginationFromServer} setCurrentPage={handlePage} />
		</>
	);
};
