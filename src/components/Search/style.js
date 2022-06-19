import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

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
