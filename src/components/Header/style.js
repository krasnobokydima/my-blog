import styled from "styled-components";

import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import { ORANGE } from "../../store/constants/colors";

export const Icon = styled(AiOutlineUser)`
	width: 30px;
	height: 30px;
	border: 1px solid white;
	border-radius: 50%;
	padding: 5px;
	margin-top: 4px;
	cursor: pointer;

  &:hover {
	  border-color: ${ORANGE};
  }
`;

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeaderTop = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

  padding: 10px 0;
  border-color: white;
  border-bottom: 1px solid white;
`;

export const SearchButton = styled.button`
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	z-index: 3;
`;

export const Input = styled.input`
  display: flex;
	width: 100%;
  height: 40px;
  padding-left: 10px;

	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	background-color: #fff;
	background-clip: padding-box;
	border: none;
	border-bottom: 1px solid #ced4da;
  border-radius: 0.4em;

	opacity: ${({ $active }) => ($active ? "1" : "0")};

	&:focus {
		outline: none;
	}
`;

export const HeaderSearch = styled.div`
	height: 40px;
	position: relative;
	width: ${({ $active }) => ($active ? "100%" : "0")};
	transition: 0.3s ease;
  margin-left: ${({ $active }) => ($active ? "40px" : "auto")};
  margin-right: ${({ $active }) => ($active ? "10px" : "0")};

`;

export const IconSearch = styled(BsSearch)`
	position: absolute;
	top: 50%;
	right: ${({ $active }) => ($active ? "100%" : "50%")};
	transform: translate(-50%, -50%);
	cursor: pointer;
	width: 18px;
	height: 18px;
	z-index: 2;
  color: white;
`;
