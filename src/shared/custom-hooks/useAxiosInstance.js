import { useEffect } from "react";
import { useAuthContext } from "../context/auth/AuthContext.jsx";
import { axiosInstance } from "../context/axiosInstance.js";

const useAxiosInstance = () => {
  const { user } = useAuthContext()

  useEffect(() => {
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