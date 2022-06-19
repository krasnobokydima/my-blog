import React, { useState, useRef, useEffect } from "react";
import { SearchLayout } from "./SearchLayout";

export const Search = ({ searchInput, setSearchInput }) => {
	const [searchToggle, setSearchToggle] = useState(false);

	const wrapperRef = useRef(null);

	const toggleSearch = () => {
		setSearchToggle((prev) => !prev);
	};

	function useOutsideCloser(ref) {
		useEffect(() => {
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setSearchToggle(false);
				}
			}
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	useOutsideCloser(wrapperRef);

	const setSearch = (e) => setSearchInput(e.target.value);

	return (
		<SearchLayout
			{...{
				searchToggle,
				wrapperRef,
				toggleSearch,
				searchInput,
				setSearch,
			}}
		/>
	);
}
