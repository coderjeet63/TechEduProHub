import axios from "axios";
import { getToken, saveAuth, clearAuth } from "./auth";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const axiosInstancee = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});

axiosInstancee.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshRes = await axios.get(`${backendUrl}/api/auth/refresh-token`, {
          withCredentials: true,
        });

        const newAccessToken = refreshRes.data.accessToken;
        if (newAccessToken) {
          saveAuth(newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstancee(originalRequest);
        }
      } catch (refreshErr) {
        console.error("Refresh token failed:", refreshErr);
        clearAuth();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstancee;
