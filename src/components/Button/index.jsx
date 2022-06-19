import React from "react";
import { Button } from "./style";

export const CustomButton = ({
	primary = true,
	disabled = false,
	...props
}) => (
	<Button
		disabled={disabled}
		primary={primary}
		{...props}
	>
		{props.value}
	</Button>
);
