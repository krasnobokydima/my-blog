import styled from "styled-components";
import { ORANGE } from "../../store/constants/colors";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;

export const Title = styled.p`
	display: block;
	padding: 10px 0;
	color: ${ORANGE};
	font-size: 1.2rem;
`;

export const UserInformation = styled.h3`
	font-size: 1.2 rem;
	color: gray;
	padding: 5px 0;
`;

export const UserStaticInfoContainer = styled(Container)`
	flex-direction: column;
	margin-bottom: 5px;
	border: 1px solid ${ORANGE};
	border-left: none;
	border-right: none;
`;
export const ButtonContainer = styled(Container)``;
