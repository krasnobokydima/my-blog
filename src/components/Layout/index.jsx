import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Main, Footer } from "./style";

import { Header } from "../Header";

export default function Layout() {
	const [searchInput, setSearchInput] = useState("");

	return (
		<Container>
			<Header
				{...{
					searchInput,
					setSearchInput,
				}}
			/>
			<Main>
				<Outlet />
			</Main>
			<Footer>&copy; myBlog 2022</Footer>
		</Container>
	);
}
