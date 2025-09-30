import axios from "axios";

// Change {{base_url}} to your actual base url
const axiosInstance = axios.create({
  baseURL: "{{base_url}}",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: request interceptor (attach token if needed)
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: attach auth token
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: response interceptor (handle global errors)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
