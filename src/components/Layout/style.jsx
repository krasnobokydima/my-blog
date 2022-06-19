import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 15px;
	max-width: 800px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const Main = styled.ul`
	position: relative;
	flex: 1;
	box-sizing: border-box;
	padding: 0;
	margin: 0;

	display: grid;
	grid-template-columns: repeat(1, 1fr);

	width: 100%;
	gap: 10px;
`;

export const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
`
