import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataFromServer } from "../../api";
import { CustomLoader } from "../Loader";
import { formatData } from "../../store/getDate";

import { PostWrap } from "./style";

// dateCreated: "2021-08-30T10:36:31.923Z"
// description: "deleteUserTest post deleteUserTest post"
// fullText: "deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post"
// likes: (28) ['612cb492902cf330b086a355', '612cb18e902cf330b086a25b', '612cb5f1902cf330b086a398', '612cd298b6141f31cc0f8d29', '612f82bbc46d5405b355bdbc', '6138afecc46d5405b358245c', '614afe58b2686012c0967593', '61532470b2686012c097579b', '612de7d3c46d5405b35520e1', '616954fdb2686012c098a4c3', '619275e5b2686012c09a7cfd', '61939f52b2686012c09a81aa', '6203950bb2686012c09ca7a2', '6268eb69b2686012c09d437c', '6267b170b2686012c09d3845', '612e2aaac46d5405b3553d9d', '627277ddb2686012c09f5745', '626bdfc5b2686012c09dff7d', '627182cbb2686012c09f2e4d', '6263eeabb2686012c09d1773', '628cd533b2686012c0a6e4be', '62863708b2686012c0a34d31', '628f6561b2686012c0a7e0c6', '628f845bb2686012c0a7f01e', '6291c2a5b2686012c0a83915', '628e6fd6b2686012c0a74936', '6294ebb8b2686012c0a89bfe', '629759ecb2686012c0a8db9b']
// postedBy: null
// title: "deleteUserTest post"
// __v: 2426
// _id: "612cb4af902cf330b086a365"

export const CurrentPost = () => {
	const [data, setData] = useState(null);
	const [postComments, setPostComments] = useState(null);
	const { _id } = useParams();

	useEffect(
		() => async () => {
			const data = await getDataFromServer("/posts", `/${_id}`);
			const comments = await getDataFromServer("/comments/post", `/${_id}`);

			setData(data);
			setPostComments(comments);
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
				<ul>
					{postComments ? (
						postComments.map((comment, i) => (
							<li key={i}>
								<PostWrap>
									{/* <h3>user: {comment.commentedBy}</h3> */}
									{/* <p>text: {comment.text || "empty"}</p> */}
									{/* <p>likes: {comment.likes.length}</p> */}
									<p>something</p>
								</PostWrap>
							</li>
						))
					) : (
						<li>empty</li>
					)}
				</ul>
			</div>
		</PostWrap>
	);
};
