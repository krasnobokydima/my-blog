import styled, { css } from "styled-components";
import {
	ORANGE,
	ORANGEHOVER,
	ORANGEACTIVE,
	DARK,
	DARKHOVER,
	DARKACTIVE,
} from "../../store/constants/colors";

export const Button = styled.button`
	display: inline-block;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;

	line-height: 1.5;

	border-width: 1px;
	border-style: solid;
	border-radius: 0.25rem;

	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	${({ $mode }) => {
		switch ($mode) {
			case "primary":
				return css`
					color: white;
					border-color: white;
					background-color: ${ORANGE};

					&:hover {
						background-color: ${ORANGEHOVER};
					}

					&:active {
						background-color: ${ORANGEACTIVE};
						box-shadow: 0 0 0 0.25rem rgb(66 70 73 / 30%);
					}
				`;
			case "danger":
				return css`
					color: white;
					background-color:	hsl(354, 70%, 30%);
					border-color: white;

					&:hover {
						background-color: 	hsl(354, 70%, 22%);
					}

					&:active {
						background-color: hsl(354, 70%, 20%);
						border-color: hsl(354, 70%, 17%);
					}
				`;
			default:
				return css`
					color: white;
					background-color: ${DARK};
					border-color: white;

					&:hover {
						background-color: ${DARKHOVER};
					}

					&:active {
						background-color: ${DARKACTIVE};
						box-shadow: 0 0 0 0.25rem rgb(66 70 73 / 30%);
					}
				`;
		}
	}}
`;
