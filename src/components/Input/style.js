import styled from "styled-components";

export const Input = styled.input`
	box-sizing: border-box;
	display: block;
	width: 100%;
	padding: 0.375rem 0.75rem;

	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	color: black;
	outline: none;

	&:active {
		outline: none;
	}
`;

export const Label = styled.label`
	font-size: 1rem;
	font-weight: 400;
	line-height: 2;
	width: 100%;
`;

export const Text = styled.p`
	color: "black";
`;

export const TextSpan = styled.span`
	color: "red"; 
	opacity: 0.7;
`;
