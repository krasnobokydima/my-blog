export const isValidLable = (form, value, pass) => {
	const mailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
	const passRegex = /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
	const validate = (mail, regex) => regex.test(mail);

	switch (form) {
		case "name":
			if (value.length < 4) {
				return "minimum length is 4 characters";
			}

			if (value.length > 16) {
				return "maximum length is 16 characters";
			}

			return true;
		case "email":
			if (!validate(value, mailRegex)) {
				return `imvalid email (example@gmail.com)`;
			}
			return true;

		case "password":
			if (value.length < 6) {
				return "minimum length is 6 characters";
			}

			if (!validate(value, passRegex)) {
				return "must have numbers and letters";
			}
			return true;
		case "repeatPassword":
			if (pass !== value) {
				return "Passwords must be the same";
			}
			return true;
		default:
			return true;
	}
};
