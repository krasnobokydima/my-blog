import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Layout from "./components/Layout";

import { HomePage } from "./pages/HomePage";

import { Posts } from "./pages/Posts";
import { CurrentPost } from "./pages/CurrentPost";

import { Users } from "./pages/Users";
import { LoginUser } from "./pages/LoginUser";


import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";

import { RequireAuth } from "./auth/RequireAuth";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/my-blog/" element={<Layout />}>
					<Route path="home" element={<HomePage />} />

					<Route path="posts" element={<Posts />} />
					<Route path="posts/:_id" element={<CurrentPost />} />

					<Route path="users" element={<Users />} />

					<Route path="*" element={<h1>page not found</h1>} />
					<Route
						path="login-user"
						element={
							<RequireAuth>
								<LoginUser />
							</RequireAuth>
						}
					/>
				</Route>

				<Route path="home" element={<Navigate to="/" replace />} />

				<Route path="create-account" element={<CreateAccount />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};
