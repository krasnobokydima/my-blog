import styled from "styled-components";

export const Form = styled.form`
	position: relative;
	box-sizing: border-box;
	height: 100vh;
	width: clamp(280px, 50vw, 500px);
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

export const Error = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	margin-top: 10px;
	box-sizing: border-box;

	padding: 0.375rem 0.75rem;

	border: 2px solid ${({errorResponse}) => errorResponse.error ? 'red' : 'green'};
	border-radius: 0.25rem;

	opacity: ${({errorResponse}) => errorResponse.error ? '1' : '0'};
	transition: opacity 0.15s ease-in-out;
`;

export const inputsForCreate = [
	{
		type: "text",
		name: "name",
		label: "Name",
	},
	{
		type: "text",
		name: "email",
		label: "Email",
	},
	{
		type: "password",
		name: "password",
		label: "Password",
	},
	{
		type: "password",
		name: "repeatPassword",
		label: "Repeat password",
	},
];
