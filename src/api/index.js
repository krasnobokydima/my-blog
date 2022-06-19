import axios from "axios";
import { LOCAL_TOKEN } from "../store/useLocalStorage";

const API_KEY = "http://test-blog-api.ficuslife.com/api/v1";

const AUTH = "/auth";
const USERS = "/users";
const USER = "/user";

const getConfig = () => {
	const token = localStorage.getItem(LOCAL_TOKEN)?.replace(/["]/gi, "");

	return {
		headers: {
			Authorization: `Bearer ${token || ""}`,
		},
	};
};

// GET
export const getDataFromServer = async (dataType, endPoint = "") => {
	const URL = API_KEY + dataType + endPoint;

	let response = await axios.get(URL, getConfig());

	if (response.status > 399) {
		return "Error";
	}

	return response.data;
};

export const getCurrentUserInfo = async () => {
	const URL = API_KEY + AUTH + USER;
	let response = await axios.get(URL, getConfig());

	if (response.status > 399) return "Error";

	return response.data;
};

// POST
const postDataOnServer = async (dataType, endPoint, data) => {
	const URL = API_KEY + dataType + endPoint;

	return axios
		.post(URL, data, getConfig())
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

export const postCreateUser = (data) => postDataOnServer(USERS, "", data);
export const postLoginUser = (data) => postDataOnServer(AUTH, "", data);

// PATCH

export const patchCurrentUserInfo = async (data, id = "") => {
	const URL = API_KEY + USERS + "/" + id;
	const responce = await axios.patch(URL, data, getConfig());

	return responce.data;
};
