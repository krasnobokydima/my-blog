import styled from "styled-components";
import {ORANGE} from '../../store/constants/colors';

export const PostWrap = styled.div`
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	margin-bottom: 10px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const PostTitle = styled.a`
	font-size: 24px;
	line-height: 36px;
	color: ${ORANGE};
	text-decoration: none;
	background-color: transparent;

	cursor: pointer;
`;

export const PostDescription = styled.p`
	line-height: 28px;
	margin-bottom: 20px;
	font-size: 16px;
`;

export const PostData = styled.p`
	color: #3b4952;
	font-size: 16px;
	font-weight: bold;
`;

export const PostAuthor = styled.p`
	color: #3b4952;
	font-size: 16px;
	font-weight: bold;
`;

export const FooterPostWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const PostComment = styled(PostAuthor)`
	font-weight: normal;
	cursor: pointer;
	flex: 1;
	margin-left: 50px;
`;
