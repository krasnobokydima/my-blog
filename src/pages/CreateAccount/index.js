import { useState } from "react";

import { postCreateUser } from "../../api";
import { useNavigate } from "react-router-dom";

import { CreateAccountLayout } from "./CreateAccountLayout";

import { isValidLable } from "../../store/validation";

export const CreateAccount = () => {
	const [form, setForm] = useState({
		email: "",
		name: "",
		password: "",
		repeatPassword: "",
	});

	const [formError, setFormError] = useState({
		email: true,
		name: true,
		password: true,
		repeatPassword: true,
		checkbox: false,
	});

	const [serverResponse, setServerResponse] = useState({});
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		for (const key in formError) {

			if (formError[key] !== true || (key in form && !form[key].length)) {
				return
			}
		}

		const newForm = {
			email: form.email,
			password: form.password,
			name: form.name,
		};

		const resp = await postCreateUser(newForm);

		if ("error" in resp) {
			setServerResponse(() => resp);
			return;
		}

		navigate("../login");
	};

	const handleCheckbox = () =>
		setFormError({ ...formError, checkbox: !formError.checkbox });

	const handleToLogin = () => {
		navigate("../login");
	};

	const onChange = (e) => {
		setServerResponse({});
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const onBlur = (e) => {
		setFormError((prev) => ({...prev,  [e.target.name]: isValidLable(e.target.name, e.target.value, form.password) }))
	}

	const onFocus = (e) => setFormError({...formError,  [e.target.name]: true });

	return (
		<CreateAccountLayout
			{...{
				onSubmit,
				handleCheckbox,
				handleToLogin,
				serverResponse,
				form,
				formError,
				onChange,
				onBlur,
				onFocus,
			}}
		/>
	);
};
