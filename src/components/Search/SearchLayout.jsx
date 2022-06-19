import React from "react";
import { IconSearch, Input, HeaderSearch } from "./style";

export const SearchLayout = ({
	searchToggle,
	wrapperRef,
	toggleSearch,
	searchInput,
	setSearch,
}) => (
	<HeaderSearch $active={searchToggle} ref={wrapperRef}>
		<IconSearch onClick={toggleSearch} $active={searchToggle} />
		<Input
			placeholder="search"
			type="search"
			onBlur={toggleSearch}
			$active={searchToggle}
			value={searchInput}
			onChange={setSearch}
		/>
	</HeaderSearch>
);
