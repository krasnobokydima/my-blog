import { configureStore } from "@reduxjs/toolkit";
// import userPostReduser from "./userPosts";
import userAuthReduser from "./userAuth";

export default configureStore({
	reducer: {
		// userPosts: userPostReduser,
		userAuth: userAuthReduser,
	},
});
