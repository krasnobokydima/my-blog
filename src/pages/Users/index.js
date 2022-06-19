import React, {useState, useEffect} from "react";
import { CustomLoader } from "../../components/Loader";
import { Pagination } from "../../components/Pagination/Pagination";
import { User } from "../User";
import { getDataFromServer } from "../../api";

export const Users = () => {
		const [data, setData] = useState(null);
		const [paginationFromServer, setPaginationFromServer] = useState({});
	
		useEffect(
			() => async () => {
				const { data, pagination } = await getDataFromServer('/users');
	
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
			} = await getDataFromServer('/users', skipping);
	
			console.log(data)
	
			setData(data);
			setPaginationFromServer(pagination);
		};

	
	return (
		<>
			{data ? (
				<>
					{data.map((el) => (
						<User user={el} key={el._id} />
					))}
				</>
			) : (
				<CustomLoader />
			)}
			<Pagination paginationFromServer={paginationFromServer} setCurrentPage={handlePage} />
		</>
	);
};
