import styled from "styled-components";
import { ORANGE } from "../../store/constants/colors";

export const Wrap = styled.div`
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	margin-bottom: 10px;
`;

export const Title = styled.a`
	font-size: 24px;
	line-height: 36px;
	color: ${ORANGE};
	text-decoration: none;
	background-color: transparent;

	cursor: pointer;
`;

export const Description = styled.p`
	line-height: 28px;
	margin-bottom: 20px;
	font-size: 16px;
`;

export const Data = styled.p`
	color: #3b4952;
	font-size: 16px;
	font-weight: bold;
`;

export const Skills = styled.p`
	color: #3b4952;
	font-size: 16px;
	font-weight: bold;
`;

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Comment = styled(Skills)`
	font-weight: normal;
	cursor: pointer;
	flex: 1;
	margin-left: 50px;
`;

export const Avatar = styled.div`
	width: 100px;
	height: 100px;
  background: url(${({imgUrl})=>imgUrl});
  background-size: cover;
`;

export const Email = styled.a`

`