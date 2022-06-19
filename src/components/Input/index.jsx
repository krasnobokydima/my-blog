import React from "react";
import { Input, Label, Text, TextSpan } from "./style";

export const CustomInput = ({
	type,
	name,
	label,
	value,
	onChange,
	onFocus,
	onBlur,
	error,
	required = true,
}) => {
	return (
	<Label>
		{error === true ? (
			<Text>{label}</Text>
		) : (
			<Text>
				{`${label}: `}
				<TextSpan>{error}</TextSpan>
			</Text>
		)}
		<Input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			required={required}
		/>
	</Label>
)};
