import { createSlice } from '@reduxjs/toolkit';
import { getAllHotels, getHotelById } from '../actionCreator/hotelActionCreator';

const initialState:any = {
    hotelData: null,
    hotelDataById: null,
    hotelLoading: false
}

const HotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllHotels.pending.toString()] : (state:any)=> {
            state.hotelLoading = true;
        },
        [getAllHotels.fulfilled.toString()] : (state:any,action:any) => {
            state.hotelLoading = false;
            state.hotelData = action.payload
        },
        [getAllHotels.rejected.toString()]: (state:any) => {
            state.hotelLoading = false
        },
        [getHotelById.pending.toString()] : (state:any)=> {
            state.hotelLoading = true;
        },
        [getHotelById.fulfilled.toString()] : (state:any,action:any) => {
            state.hotelLoading = false;
            state.hotelDataById = action.payload
        },
        [getHotelById.rejected.toString()]: (state:any) => {
            state.hotelLoading = false
        }
    }
})

export default HotelSlice.reducer;