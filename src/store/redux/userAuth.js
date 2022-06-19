import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUserInfo, patchCurrentUserInfo } from "../../api";

export const getUserInfo = createAsyncThunk(
	"userAuth/getUserInfo",
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const info = await getCurrentUserInfo();
			dispatch(setUser(info));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const patchUserInfo = createAsyncThunk(
	"userAuth/getUserInfo",
	async ({ sendData, id, allUserValues }, { rejectWithValue, dispatch }) => {
		dispatch(setUser({ ...allUserValues, ...sendData }));
		try {
			await patchCurrentUserInfo(sendData, id);
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const stateActions = {
	pended: (state) => {
		state.status = "loading";
		state.error = null;
	},
	fullfiled: (state) => {
		state.status = "resolved";
		state.error = null;
	},
	rejected: (state, action) => {
		state.status = "rejected";
		state.error = action.payload;
	},
};

const userAuth = createSlice({
	name: "userAuth",
	initialState: {
		user: {},
		status: null,
		error: null,
	},
	reducers: {
		setUser(state, actions) {
			state.user = actions.payload;
		},
		setUserNull(state) {
			state.user = null;
			state.userBeforeSend = null;
		},
	},

	extraReducers: {
		[getUserInfo.pending]: stateActions.pended,
		[getUserInfo.fulfilled]: stateActions.fullfiled,
		[getUserInfo.rejected]: stateActions.rejected,

		[patchUserInfo.pending]: stateActions.pended,
		[patchUserInfo.fulfilled]: stateActions.fullfiled,
		[patchUserInfo.rejected]: stateActions.rejected,
	},
});

export const { setUser, setUserNull } = userAuth.actions;
export default userAuth.reducer;
