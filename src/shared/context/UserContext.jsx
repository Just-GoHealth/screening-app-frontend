import { createContext, useContext } from "react";
import { ENDPOINTS } from "../endpoints/endpoints.js";
import { axiosInstance } from "./axiosInstance.js";
import useAxiosInstance from "../custom-hooks/useAxiosInstance.js";

const UserContext = createContext(undefined);
const UserProvider = ({ children }) => {
  const axiosWithToken = useAxiosInstance();
  const getAllUsers = () => {
    return axiosInstance.get(ENDPOINTS.getAllUsers).then((response) => {
      if (!!response && response.data) {
        return response.data;
      }
    });
  };

  const activateUser = async (userId) => {
    return axiosWithToken
      .put(`${ENDPOINTS.activateUser}/${userId}`)
      .then((response) => {
        if (!!response && response.data && response.status === 200) {
          return response.data;
        }
      });
  };

  const suspendUser = async (userId) => {
    return axiosWithToken
      .put(`${ENDPOINTS.suspendUser}/${userId}`)
      .then((response) => {
        if (!!response && response.data && response.status === 200) {
          return response.data;
        }
      });
  };

  return (
    <UserContext.Provider value={{ getAllUsers, activateUser, suspendUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
export default UserProvider;
