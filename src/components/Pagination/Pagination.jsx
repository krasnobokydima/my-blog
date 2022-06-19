import React, { useMemo, useState } from "react";
import { PaginationNav, PaginationUl, PageLink } from "./style";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
const pageNeighbours = 2;

const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};

export const Pagination = ({ paginationFromServer, setCurrentPage }) => {
	const [pages, setPages] = useState([1]);

	const currentPage = Math.ceil(paginationFromServer.skip / 10 + 1) || 1;
	const pageLimit = paginationFromServer.limit;
	const totalRecords = paginationFromServer.total;
	const totalPages = Math.ceil(totalRecords / pageLimit);

	useMemo(() => {
		const createPages = () => {
			const totalNumbers = pageNeighbours * 2 + 1;
			const totalBlocks = totalNumbers + 2;

			if (totalPages > totalBlocks) {
				const startPage = Math.max(2, currentPage - pageNeighbours);
				const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

				let pages = range(startPage, endPage);

				const hasLeftSpill = startPage > 2;
				const hasRightSpill = totalPages - endPage > 1;
				const spillOffset = totalNumbers - (pages.length + 1);

				switch (true) {
					// handle: (1) < {5 6} [7] {8 9} (10)
					case hasLeftSpill && !hasRightSpill: {
						const extraPages = range(startPage - spillOffset, startPage - 1);
						pages = [LEFT_PAGE, ...extraPages, ...pages];
						break;
					}

					// handle: (1) {2 3} [4] {5 6} > (10)
					case !hasLeftSpill && hasRightSpill: {
						const extraPages = range(endPage + 1, endPage + spillOffset);
						pages = [...pages, ...extraPages, RIGHT_PAGE];
						break;
					}

					// handle: (1) < {4 5} [6] {7 8} > (10)
					case hasLeftSpill && hasRightSpill:
					default: {
						pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
						break;
					}
				}

				return [1, ...pages, totalPages];
			}

			return range(1, totalPages);
		};

		setPages(createPages());
	}, [currentPage, totalPages]);

	const handleClick = (page) => setCurrentPage(page);
	const handleMoveLeft = () =>
		setCurrentPage(currentPage - pageNeighbours * 2 - 1);
	const handleMoveRight = () =>
		setCurrentPage(currentPage + pageNeighbours * 2 + 1);
	const switchChildren = (page) => (typeof page === "number" ? page : "...");

	const switchHandle = (page) => {
		switch (page) {
			case currentPage:
				return;
			case LEFT_PAGE:
				return handleMoveLeft();
			case RIGHT_PAGE:
				return handleMoveRight();
			default:
				return handleClick(page);
		}
	};

	return (
		<PaginationNav>
			<PaginationUl>
				{pages.map((page) => (
					<li key={page}>
						<PageLink
							onClick={() => switchHandle(page)}
							active={page === currentPage}
						>
							{switchChildren(page)}
						</PageLink>
					</li>
				))}
			</PaginationUl>
		</PaginationNav>
	);
};
