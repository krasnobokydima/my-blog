import React from "react";

import { inputs } from "../../store/constants/login";

import { CustomButton } from "../../components/Button";
import { CustomInput } from "../../components/Input";

import { Form, Container, Error } from "./style";

export const LoginLayout = ({
	onSubmit,
	handleChange,
	handleBlur,
	handleFocus,
	form,
	formError,
	submitError,
	onCreateAccount,
}) => (
	<Form onSubmit={onSubmit}>
		<h1>MYBLOG</h1>
		{inputs.map((el, key) => {
			return (
				<CustomInput
					key={key}
					type={el.type}
					name={el.name}
					label={el.label}
					value={form[el.type]}
					onChange={handleChange}
					onBlur={handleBlur}
					onFocus={handleFocus}
					error={formError[el.name]}
				/>
			);
		})}
		<Container>
			<CustomButton value="Submit" type="submit" />

			<CustomButton
				value="Create account"
				type="button"
				primary={false}
				onClick={onCreateAccount}
			/>
		</Container>
		<Error $error={submitError}>No such user. You can create new account</Error>
	</Form>
);
