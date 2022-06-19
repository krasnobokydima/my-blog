import { CustomButton } from "../../components/Button";
import { CustomCheckbox } from "../../components/Checkbox";
import { CustomInput } from '../../components/Input'

import { Form, Container, inputsForCreate, Error } from "./style";

export const CreateAccountLayout = ({
	onSubmit,
	handleCheckbox,
	handleToLogin,
	serverResponse,
	form,
	formError,
	onChange,
	onBlur,
	onFocus,
}) => {
	return (
		<Form onSubmit={onSubmit}>
			{inputsForCreate.map((el, key) => {
				return (
					<CustomInput
						key={key}
						type={el.type}
						name={el.name}
						label={el.label}
						value={form[el.name]}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						error={formError[el.name]}
					/>
				);
			})}

			<CustomCheckbox onClick={handleCheckbox} value={formError.checkbox} />

			<Container>
				<CustomButton value="Create account" type="submit" />
				<CustomButton
					type="button"
					primary={false}
					value="I have an account"
					onClick={handleToLogin}
				/>
			</Container>

			<Error errorResponse={serverResponse}>
				{serverResponse.error && serverResponse.error}
			</Error>
		</Form>
	);
};
