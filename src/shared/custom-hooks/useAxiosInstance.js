import { useEffect } from "react";
import { useAuthContext } from "../context/auth/AuthContext.jsx";
import { axiosInstance } from "../context/axiosInstance.js";

const useAxiosInstance = () => {
  const { userData } = useAuthContext()

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${userData.token}`
      }
      return config
    })
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
    }
  }, userData);

  return axiosInstance
}

export default useAxiosInstance()