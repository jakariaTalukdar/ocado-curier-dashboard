import axios from "axios";
// import {getAPIToken} from "@/lib/actions";


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


api.interceptors.request.use(
    (config)=> {
    const token = localStorage.getItem("token");
    // const token = getAPIToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }else {
        config.headers.Authorization = "";
    }

    return config;
},
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);

export const fetcher = (url) => api.get(url).then((res) => res.data);
export  default api;