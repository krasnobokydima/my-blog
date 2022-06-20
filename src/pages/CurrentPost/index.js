import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFromServer } from "../../api";
import { CustomLoader } from "../../components/Loader";
import { PostComments } from "../../components/PostComments";
import { formatData } from "../../store/getDate";

import { AiOutlineUser } from "react-icons/ai";

import {
	PostWrap,
	PostTitle,
	PostData,
	PostAuthor,
	PostDescription,
	CommentsContainer,
} from "./style";

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

	const { title, dateCreated, description, fullText, postedBy, likes } = data;

	console.log(data, data.likes.length, data.postedBy);

	return (
		<PostWrap>
			<PostTitle>Title: {title}</PostTitle>
			<PostDescription>description: {description}</PostDescription>
			<PostData>fullText: {fullText}</PostData>
			<div style={{display: 'flex', justifyContent: 'space-between', margin: '5px 0'}}>
				<PostAuthor>Posted by: {postedBy ? postedBy : "anonim"}</PostAuthor>
				<PostData>created date: {formatData(dateCreated)}</PostData>
			</div>
			<div>
				<p>Likes: {likes.length}</p>
			</div>
			<CommentsContainer>
				<h3>comments:</h3>
				<PostComments id={_id} />
			</CommentsContainer>
		</PostWrap>
	);
};
