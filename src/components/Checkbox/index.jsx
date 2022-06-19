import React from "react";
import { Container } from "./style";

export const CustomCheckbox = ({ value, onClick }) => {
	return (
		<Container>
			<input
				type="checkbox"
				value={value}
				id="statementsAgree"
				onClick={onClick}
				required
			/>

			<label htmlFor="statementsAgree" style={{ flexGrow: 1 }}>
				I agree all statements in{" "}
				<a
					href="https://en.wikipedia.org/wiki/Terms_of_service"
					target="_blank"
					rel="noreferrer"
				>
					Terms of service
				</a>
			</label>
		</Container>
	);
};
