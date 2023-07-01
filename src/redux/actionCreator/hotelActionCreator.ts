import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';

export const getAllHotels = createAsyncThunk<any,any>(
    'hotels/getAllHotels', 
    async() => {
        const response = await axiosInstance.get('/hotels')
        return response?.data
    }
)

export const getHotelById = createAsyncThunk<any,any>(
    'hotels/getHotelById', 
    async({id}) => {
        const response = await axiosInstance.get(`/hotels/find/${id}`)
        return response?.data
    }
)
