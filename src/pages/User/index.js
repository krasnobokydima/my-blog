import React from "react";

import {
	Wrap,
	Title,
	Description,
	FooterWrap,
	Data,
	Avatar,
	Email,
} from "./style";

/**
avatar: "/users/612cae78ae32c13081a6af5e/1afed7b46b838c17f68589ee31e9a7a3.jpeg"
dateCreated: "2021-08-30T10:10:00.184Z"
details: "string"
email: "test@test.com"
extra_details: "string"
name: "string"
profession: "string"
skills: "string"
__v: 0
_id: "612cae78ae32c13081a6af5e"

background-image: ${({ avatar }) =>
		avatar
			? `url(${API_KEY}${avatar})`
			: "url(https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png)"};
 */

const baseUserUrl =
	"https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png";

export const User = ({ user }) => {
	const { name, email, dateCreated, profession, avatar } = user;
	const postDate = formatData(dateCreated);

	return (
		<Wrap>
			<Avatar imgUrl={baseUserUrl}></Avatar>
			<Title>{name}</Title>
			<Email href={`mailto:${email}`}>{email}</Email>
			<Description>
				Profession: {profession ? profession : "unemployed"}
			</Description>
			<p>{avatar}</p>
			<FooterWrap>
				<Data>{`Registration data: ${postDate}`}</Data>
			</FooterWrap>
		</Wrap>
	);
}

function formatData(date) {
	const currentDate = new Date(date);
	const mounth = currentDate.toLocaleString("default", { month: "short" });
	const day = currentDate.getDay();
	const year = currentDate.getFullYear();

	return `${day} ${mounth} ${year}`;
}
