import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (err) => {
    //Handle refresh token here
    const originalRequest = err.config;
    if (err.response.status === 306 && !originalRequest._retry) {
      originalRequest._retry = true;
      //do some stuff here........
      return axiosInstance(originalRequest);
    }
    return Promise.reject(err);
  }
);
export default axiosInstance;
