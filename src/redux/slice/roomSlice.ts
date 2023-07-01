import { createSlice } from '@reduxjs/toolkit';
import { getAllRooms } from '../actionCreator/roomActionCreator';

const initialState:any = {
    roomData: null,
    roomLoading: false
}

const HotelSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllRooms.pending.toString()] : (state:any)=> {
            state.roomLoading = true;
        },
        [getAllRooms.fulfilled.toString()] : (state:any,action:any) => {
            state.roomLoading = false;
            state.roomData = action.payload
        },
        [getAllRooms.rejected.toString()]: (state:any) => {
            state.roomLoading = false
        }
    }
})

export default HotelSlice.reducer;