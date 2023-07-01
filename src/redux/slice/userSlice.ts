import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, getUserById } from '../actionCreator/userActionCreator';

const initialState:any = {
    userData: null,
    userLoading: false,
    userDataById: null
}

const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending.toString()] : (state:any)=> {
            state.userLoading = true;
        },
        [getAllUsers.fulfilled.toString()] : (state:any,action:any) => {
            state.userLoading = false;
            state.userData = action.payload
        },
        [getAllUsers.rejected.toString()]: (state:any) => {
            state.userLoading = false
        },
        [getUserById.pending.toString()] : (state:any)=> {
            state.userLoading = true;
        },
        [getUserById.fulfilled.toString()] : (state:any,action:any) => {
            state.userLoading = false;
            state.userDataById = action.payload
        },
        [getUserById.rejected.toString()]: (state:any) => {
            state.userLoading = false
        },
    }
})

export default UserSlice.reducer;