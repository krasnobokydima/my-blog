import React from "react";
import ReactLoading from "react-loading";
import { LoadingComponent } from "./style";

export const CustomLoader = ({size = '80'}) => (
	<LoadingComponent>
		<ReactLoading
			type={"spinningBubbles"}
			color={"#ffca07"}
			height={size}
			width={size}
		/>
	</LoadingComponent>
);
