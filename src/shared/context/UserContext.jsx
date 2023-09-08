import { createContext, useContext } from "react";
import { ENDPOINTS } from "../endpoints/endpoints.js";
import { axiosInstance } from "./axiosInstance.js";

const UserContext = createContext(undefined)
const UserProvider = ({ children }) => {
  const getAllUsers = () => {
    return axiosInstance.get(ENDPOINTS.getAllUsers).then((response) => {
      if (!!response && response.data) {
        return response.data
      }
    })
  }
  return <UserContext.Provider value={{ getAllUsers }}>
    {children}
  </UserContext.Provider>
}
export const useUserContext = () => useContext(UserContext)
export default UserProvider