import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports.js";
import ReactLoading from "react-loading";

import { Input, SubTitle, Container, Icon, LoadingContainer } from "./style.jsx";

export const EditText = ({ label, userKey, userData }) => {
	const { user, status } = useSelector((state) => state.userAuth);
	const [updateUser, setUpdateUser] = userData;
	const [isUpdate, setIsUpdate] = useState(false);

	useEffect(() => {
		if (status === 'resolved') {
			setIsUpdate(false)
		}
	}, [status])

	const changeValue = ({ target }) => {
		setIsUpdate(true);
		setUpdateUser((prev) => ({ ...prev, [userKey]: target.value }));
	};


	return (
		<Container>
			<SubTitle>{label}</SubTitle>

			<Input type="text" value={updateUser[userKey]} onChange={changeValue} />

			{status === "loading" && isUpdate ? (
				<LoadingContainer>
					<ReactLoading
						type={"spinningBubbles"}
						color={"#ffca07"}
						height={"16px"}
						width={"16px"}
					/>
				</LoadingContainer>
			) : (
				<Icon type="button" $toggle={updateUser[userKey] === user[userKey]} />
			)}
		</Container>
	);
};

//
