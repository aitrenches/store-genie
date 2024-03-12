import axios from "axios";
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

let isLogoutDispatched = false;

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.NEXT_PUBLIC_API_KEY,
  },
});

// Request interceptors for API calls
http.interceptors.request.use(
  (request) => {
    request.headers["Authorization"] = process.env.NEXT_PUBLIC_API_KEY;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);
