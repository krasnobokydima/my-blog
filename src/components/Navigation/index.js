import React from "react";
import { HeaderNav, HeaderLink, NavLinks, BackButton } from "./style";

import { useMatch, useNavigate } from "react-router-dom";
// import { CustomButton } from "../Button";

const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch({
		path: to,
		end: to.length === 1,
	});

	const handleNavLink = () => {
		if (match) return;
	};

	return (
		<HeaderLink to={to} {...props} onClick={handleNavLink} active={match}>
			{children}
		</HeaderLink>
	);
};

export const Navigation = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate(-1);

	return (
		<HeaderNav>
			<NavLinks>
				<CustomLink to={"posts"}>Posts</CustomLink>
				<CustomLink to={"users"}>Users</CustomLink>
			</NavLinks>
			<BackButton onClick={handleClick}>Go back</BackButton>
		</HeaderNav>
	);
};
