import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';

export const getAllRooms = createAsyncThunk<any,any>(
    'hotels/getAllRooms', 
    async() => {
        const response = await axiosInstance.get('/rooms')
        return response?.data
    }
)