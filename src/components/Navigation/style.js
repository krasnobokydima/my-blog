import styled from "styled-components";
import { ORANGE } from "../../store/constants/colors";

import { NavLink } from "react-router-dom";

export const HeaderNav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const HeaderLink = styled(NavLink)`
	color: ${({ active }) => (active ? ORANGE : "white")};
	padding: 10px 10px 10px 10px;
	margin-right: 10px;
	border-color: orange;
	border-bottom: ${({ active }) => (active ? "1px" : "0")};
	cursor: pointer;
	font-size: 1.2em;
	line-height: 1;
	text-decoration: none;

	&:first-child {
		padding-left: 0;
	}
`;

export const BackButton = styled.p`
	color: white;
	padding: 10px 10px 10px 10px;
	margin-right: 10px;
	border-color: orange;
	cursor: pointer;
	font-size: 1.2em;
	line-height: 1;
	text-decoration: none;
`;

export const NavLinks = styled.div`
display: flex;
justify-content: center;
gap: 10px;
align-items: center;
`
