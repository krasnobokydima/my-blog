import React from "react";
import { formatData } from "../../store/getDate";

import {
	PostWrap,
	PostTitle,
	PostDescription,
	FooterPostWrap,
	PostData,
	PostComment,
} from "./style";

export const Post = ({ post }) => {
	const { title, description, dateCreated, likes, _id } = post;
	const postDate = formatData(dateCreated);

	return (
		<PostWrap>
			<PostTitle to={`/posts/${_id}`}>{title}</PostTitle>
			<PostDescription>{description}</PostDescription>
			<PostDescription>{_id}</PostDescription>
			<FooterPostWrap>
				<PostData>{`Date: ${postDate}`}</PostData>
				<PostComment>{`Likes: ${likes.length}`}</PostComment>
			</FooterPostWrap>
		</PostWrap>
	);
};


