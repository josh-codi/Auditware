import axios from 'axios';
import { BaseUrl } from '../Setup/Constants';
import local from '../Store/Local';

const axiosInstance = axios.create({
    baseURL: BaseUrl,
    // timeout: 5000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await local.get('token')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Add a response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 && // Unauthorized error
      !originalRequest._retry // Ensure the request is not already being retried
    ) {
      try {
        const refreshToken = await local.get('refreshToken');
        const newAccessToken = await refreshAccessToken(refreshToken);

        await local.set('accessToken', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing access token:', refreshError);

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Function to refresh access token using refresh token
const refreshAccessToken = async (refreshToken) => {
  // Implement token refresh logic here
  // Send a request to your server to refresh the access token using the refresh token
};

export default axiosInstance;
