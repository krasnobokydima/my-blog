import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoLink = styled.h1`
	cursor: pointer;
	color: black;
`;

export const Logo = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("../home");
	};

	return (
		<div>
			<LogoLink
				onClick={handleClick}
				style={{ background: "white", borderRadius: "0.2em", padding: '5px 5px' }}
			>
				myBlog
			</LogoLink>
		</div>
	);
}
