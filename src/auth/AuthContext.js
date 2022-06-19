import React, { createContext, useContext, useState } from "react";
import { getCurrentUserInfo } from "../api";
import { LOCAL_TOKEN, CURRENT_USER } from "../store/useLocalStorage";

const AuthContect = createContext();

export const useAuth = () => {
	return useContext(AuthContect);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const login = async (callback) => {
		const userToken = localStorage.getItem(LOCAL_TOKEN);
		const getUser = await getCurrentUserInfo(userToken);
		setCurrentUser(getUser);

		localStorage.setItem(CURRENT_USER, JSON.stringify(getUser))
		callback();
	};

	const logout = (callback) => {
		setCurrentUser(null);
		localStorage.clear()
		callback();
	};

	const value = {
		currentUser,
		login,
		logout,
	};

	return <AuthContect.Provider value={value}>{children}</AuthContect.Provider>;
};
