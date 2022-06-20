import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginLayout } from "./LoginLayout";

import { postLoginUser } from "../../api";
import { isValidLable } from "../../store/validation";

export const Login = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [formError, setFormError] = useState({ email: false, password: false });
	const [submitError, setSubmitError] = useState(false);

	const navigate = useNavigate();

	const handleChange = ({ target }) => {
		setForm((prev) => ({ ...prev, [target.name]: target.value }));
	};

	const handleBlur = ({ target }) => {
		const { name, value } = target;
		setFormError((prev) => ({ ...prev, [name]: isValidLable(name, value) }));
	};

	const handleFocus = ({ target }) =>
		setFormError((prev) => ({ ...prev, [target.name]: true }));

	const onSubmit = async (e) => {
		e.preventDefault();

		for (const input in form) {
			if (!isValidLable([input], form[input])) return
		}

		const response = await postLoginUser(form);

		if ("error" in response) return setSubmitError(true);

		setSubmitError(false);
		const token =  JSON.stringify(response.token).replace(/["]/gi, '')
		localStorage.setItem("user-token", token);

		navigate('../my-blog/home')
	};

	const onCreateAccount = () => navigate("../create-account");

	return (
		<LoginLayout
			{...{
				onSubmit,
				handleChange,
				handleBlur,
				handleFocus,
				form,
				formError,
				submitError,
				onCreateAccount,
			}}
		/>
	);
};
