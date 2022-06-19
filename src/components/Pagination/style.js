import styled from "styled-components";
import {
	ORANGE,
	DARK,
} from "../../store/constants/colors";

export const PaginationNav = styled.nav`
	display: block;
	margin: 10px auto;
	width: min-content;
`;

export const PaginationUl = styled.ul`
	display: flex;
	padding-left: 0;
	list-style: none;
	border-radius: 0.25rem;
	gap: 5px;
`;

export const PageLink = styled.p`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2em;
	width: 2em;
	margin-left: -1px;
	color: ${({active}) => (active ? DARK : 'white')};
	background-color:  ${({active}) => (active ? ORANGE : DARK)};
	border: 1px solid ${({active}) => (active ? DARK : 'white')};
  cursor: pointer;
	border-radius: 50%;
`;
