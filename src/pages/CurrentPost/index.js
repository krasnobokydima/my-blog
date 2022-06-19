import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFromServer } from "../../api";
import { CustomLoader } from "../../components/Loader";
import { PostComments } from "../../components/PostComments";
import { formatData } from "../../store/getDate";

import { PostWrap } from "./style";

export const CurrentPost = () => {
	const [data, setData] = useState(null);
	const { _id } = useParams();

	useEffect(
		() => async () => {
			const data = await getDataFromServer("/posts", `/${_id}`);

			setData(data);
		},
		[_id]
	);

	if (!data) {
		return <CustomLoader />;
	}

	const { title, dateCreated, description, fullText, postedBy } = data;

	return (
		<PostWrap>
			<h2>Title: {title}</h2>
			<p>created date: {formatData(dateCreated)}</p>
			<p>description: {description}</p>
			<p>fullText: {fullText}</p>
			<p>Posted by: {postedBy}</p>
			<div style={{ marginTop: "20px" }}>
				<h3>comments:</h3>
				<PostComments id={_id}/>
			</div>
		</PostWrap>
	);
};
