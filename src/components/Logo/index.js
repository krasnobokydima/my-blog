import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoLink = styled.h1`
	padding: 5px;
	border-radius: 0.2em;

	color: black;
	background: white;

	cursor: pointer;
`;

export const Logo = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("./home");
	};

	return (
		<div>
			<LogoLink
				onClick={handleClick}
			>
				myBlog
			</LogoLink>
		</div>
	);
}
