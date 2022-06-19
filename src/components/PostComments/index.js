import React, { useEffect, useState } from "react";
import { PostWrap } from "./style";
import { getDataFromServer } from "../../api";
import { Pagination } from "../Pagination/Pagination";

import { Comment } from "../../components/Comment";

// dateCreated: "2021-08-30T10:36:31.923Z"
// description: "deleteUserTest post deleteUserTest post"
// fullText: "deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post deleteUserTest post"
// likes: (28) ['612cb492902cf330b086a355', '612cb18e902cf330b086a25b', '612cb5f1902cf330b086a398', '612cd298b6141f31cc0f8d29', '612f82bbc46d5405b355bdbc', '6138afecc46d5405b358245c', '614afe58b2686012c0967593', '61532470b2686012c097579b', '612de7d3c46d5405b35520e1', '616954fdb2686012c098a4c3', '619275e5b2686012c09a7cfd', '61939f52b2686012c09a81aa', '6203950bb2686012c09ca7a2', '6268eb69b2686012c09d437c', '6267b170b2686012c09d3845', '612e2aaac46d5405b3553d9d', '627277ddb2686012c09f5745', '626bdfc5b2686012c09dff7d', '627182cbb2686012c09f2e4d', '6263eeabb2686012c09d1773', '628cd533b2686012c0a6e4be', '62863708b2686012c0a34d31', '628f6561b2686012c0a7e0c6', '628f845bb2686012c0a7f01e', '6291c2a5b2686012c0a83915', '628e6fd6b2686012c0a74936', '6294ebb8b2686012c0a89bfe', '629759ecb2686012c0a8db9b']
// postedBy: null
// title: "deleteUserTest post"
// __v: 2426
// _id: "612cb4af902cf330b086a365"


export const PostComments = ({ id }) => {
	const [postComments, setPostComments] = useState(null);
	const [paginationFromServer, setPaginationFromServer] = useState({});
	const [preparingComments, setPreparingComents] = useState(null);

	useEffect(
		() => async () => {
			const comments = await getDataFromServer("/comments/post", `/${id}`);

			setPostComments(comments);
			setPreparingComents(comments.filter((_, i) => i < 10))
			setPaginationFromServer(createPagination(comments.length, 1))
		},
		[id]
	);

	const handlePage = (page) => {
		const skipping = (page - 1) * 10;

		setPreparingComents(() => postComments.filter((_, i) => (i >= (page - 1) * 10 && i < page * 10)))
		setPaginationFromServer(prev => ({...prev, skip: skipping}));
	};

	return (
		<PostWrap>
			<ul>
				{preparingComments ? (
					preparingComments.map((comment, i) => <Comment  key={i} comment={comment}/>)
				) : (
					<li>empty</li>
				)}
			</ul>

			<Pagination paginationFromServer={paginationFromServer} setCurrentPage={handlePage} />
		</PostWrap>
	);
};

function createPagination(total, page) {
	const skipping = `?&skip=${(page - 1) * 10}`;

	return {
		skip: skipping,
		limit: 10,
		total: total,
	}
}
