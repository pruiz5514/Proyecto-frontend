import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        userData: {token: "",
            email: "",
            userId:""
        }
    },
    reducers: {
        updateUserData: (state, action) => {
            state.userData = { ...state.userData, ...action.payload }
        }
    }
})

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;