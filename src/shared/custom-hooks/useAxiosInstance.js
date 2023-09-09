import { useEffect } from "react";
import { useAuthContext } from "../context/auth/AuthContext.jsx";
import { axiosInstance } from "../context/axiosInstance.js";
import axios from "axios";
import { BASE_URL } from "../endpoints/endpoints.js";

const useAxiosInstance = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
    const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${user.userToken}`
      }
      return config
    })
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
    }
  }, []);

  return axiosInstance
}

export default useAxiosInstance