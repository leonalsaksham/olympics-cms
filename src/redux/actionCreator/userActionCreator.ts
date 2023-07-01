import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';

export const getAllUsers = createAsyncThunk<any,any>(
    'users/getAllUsers',
    async() => {
        const response = await axiosInstance.get('/users');
        return response?.data
    }
)

export const getUserById = createAsyncThunk<any,any>(
    'users/getUserById',
    async({id}) => {
        const response = await axiosInstance.get(`/users/${id}`);
        return response?.data
    }
)