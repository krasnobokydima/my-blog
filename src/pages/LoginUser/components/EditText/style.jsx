import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { MdDone } from "react-icons/md";

import { DARK } from "../../../../store/constants/colors";

export const Input = styled(TextareaAutosize)`
	font-size: 1rem;
	display: block;
	color: gray;
	margin: 0;
	padding: 0;
	font-family: inherit;
	border-color: transparent;
	font-weight: 400;
	line-height: 1.5;
	background-clip: padding-box;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	background: transparent;
	outline: none;
	width: 100%;
	margin-right: 10px;

	&:active,
	&:focus {
		background: white;
		color: ${DARK};
		border: 1px solid #bdbdbd;
	}
`;

export const SubTitle = styled.h3`
	display: block;
	margin-top: 1px;

	height: 24px;
	font-size: 1.2 rem;
	margin-right: 10px;
	width: max-content;
	white-space: nowrap;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	padding: 5px 0;
	box-sizing: border-box;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
`;

export const Icon = styled(MdDone)`
	margin: 0;
	padding: 0;
	color: green;
	background: green;
	height: 16px;
	min-width: 16px;
	border-radius: 50%;
	opacity: ${({$toggle}) => $toggle ? '0' : '1'};
`;

export const LoadingContainer = styled.div`
 	position: relative;
	display: flex;
	justify-content: center;
	align-items: center; 
	height: 24px;
`