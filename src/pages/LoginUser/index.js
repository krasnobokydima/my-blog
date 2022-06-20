import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { formatData } from "../../store/getDate";
import { config } from "../../store/constants/loginUserConfig";

import { CustomButton } from "../../components/Button";
import { EditText } from "./components/EditText";

import { getUserInfo, patchUserInfo } from "../../store/redux/userAuth";

import {
	ButtonContainer,
	Title,
	UserInformation,
	UserStaticInfoContainer,
} from "./style";
import { CustomLoader } from "../../components/Loader";

export const LoginUser = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, status } = useSelector((state) => state.userAuth);

	const [errorInput, setErrorInput] = useState(false);
	const [updateUser, setUpdateUser] = useState(user);

	useEffect(() => {
		dispatch(getUserInfo());
	}, [dispatch]);
	
	useEffect(() => {
		setUpdateUser(user);
	}, [user]);

	const onReset = () => setUpdateUser(user);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!updateUser.name.trim()) {
			setErrorInput(true);
			return;
		}

		setErrorInput(false);

		const sendData = {
			skills: removeExtraSpaces(updateUser.skills),
			name: removeExtraSpaces(updateUser.name),
			profession: removeExtraSpaces(updateUser.profession),
			details: removeExtraSpaces(updateUser.details),
			extra_details: removeExtraSpaces(updateUser.extra_details),
		};

		dispatch(patchUserInfo({ sendData, id: user._id, allUserValues: user }));
	};

	const onDeleteUser = (e) => {
		e.preventDefault();
	};

	const logoutUser = (e) => {
		e.preventDefault();
		localStorage.clear();
		navigate("../login");
	};

	const { email, _id, dateCreated } = updateUser;

	return (
		<>
			{(!Object.keys(user).length && status === "loading") ? (<CustomLoader/>) 
				: (
				<form onSubmit={handleSubmit}>
					<Title>
						{errorInput
							? "Can`t save empty name"
							: "Enter a new value to change your data"}
					</Title>
					<UserStaticInfoContainer>
						<UserInformation>Your email: {email}</UserInformation>
						<UserInformation>Your id: {_id}</UserInformation>
						<UserInformation>Created date: {formatData(dateCreated)}</UserInformation>
					</UserStaticInfoContainer>
					{config.map(({ label, userKey }) => (
						<EditText
							label={label}
							userKey={userKey}
							key={userKey}
							userData={[updateUser, setUpdateUser]}
						/>
					))}
					<ButtonContainer>
						<div style={{ display: "flex", gap: "10px" }}>
							<CustomButton type="submit" value="Save new data" $mode="primary" />
							<CustomButton
								type="button"
								value="delete user"
								$mode="danger"
								onClick={onDeleteUser}
							/>
							<CustomButton
								type="reset"
								value="Reset"
								$mode="Primary"
								onClick={onReset}
							/>
						</div>
						<CustomButton
							type="button"
							value="Log out"
							$mode="Primary"
							onClick={logoutUser}
						/>
					</ButtonContainer>
				</form>
			)}
		</>
	);
};

function removeExtraSpaces(string) {
	return string.replace(/\s+/g, " ").trim();
}
