// src/utils/axiosInstance.js
import axios from "axios";
import { getToken, saveAuth, clearAuth } from "./auth";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const axiosInstancee = axios.create({
  baseURL: backendUrl,
  withCredentials: true, // 👈 important to send refreshToken cookie
});

// --- Interceptor for expired access tokens ---
axiosInstancee.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired and not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshRes = await axios.get(`${backendUrl}/api/auth/refresh-token`, {
          withCredentials: true,
        });

        const newAccessToken = refreshRes.data.accessToken;
        if (newAccessToken) {
          saveAuth(newAccessToken); // update localStorage
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest); // retry request
        }
      } catch (refreshErr) {
        console.error("Refresh token failed:", refreshErr);
        clearAuth();
        window.location.href = "/login"; // redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstancee;
