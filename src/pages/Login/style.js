import styled from "styled-components";

export const Form = styled.form`
	box-sizing: border-box;
	height: 100vh;
	width: clamp(280px, 50vw, 500px);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 5px;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
	width: 100%;
`;

export const Error = styled.p`
	color: red;
	opacity: ${({ $error }) => ($error ? "1" : "0")};
`;



