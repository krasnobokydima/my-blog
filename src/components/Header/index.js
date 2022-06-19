import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderTop, Icon } from "./style";

import { Navigation } from "../Navigation";
import { Search } from "../Search";
import { Logo } from "../Logo";

export const Header = ({
	searchInput,
	setSearchInput,
	activeLink = 0,
	handleNavLink,
}) => {
	return (
		<HeaderWrapper>
			<HeaderTop>
				<Logo />
				<Search searchInput={searchInput} setSearchInput={setSearchInput} />
				<Link to="login-user">
					<Icon />
				</Link>
			</HeaderTop>
			<Navigation activeLink={activeLink} handleNavLink={handleNavLink} />
		</HeaderWrapper>
	);
};
