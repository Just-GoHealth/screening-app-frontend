import React, { createContext, useContext, useState } from "react";
import { axiosInstance } from "../axiosInstance.js";
import { useCookies } from "react-cookie";
import { ENDPOINTS } from "../../endpoints/endpoints.js";
// import Cookies from 'js-cookie';

export const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authState, setAuthState] = useState("signup");
  const [registerStep, setRegisterStep] = useState("register");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // Access the cookies as needed
  const user = cookies.user;

  const logout = () => {
    removeCookie("user", { path: "/" });
    window.location.assign("/");
  }

  const login = (data) => {
    return axiosInstance.post(ENDPOINTS.login, data).then((response) => {
      console.log(response)
      if (!!response && response.data.status === 200) {
        console.log(response)
        setCookie("user", response.data.data, {
          path: "/",
        });
      }
    });
  }

  const signup = (data) => {
    return axiosInstance.post(ENDPOINTS.signup, data).then((response) => {
      if(!!response && response.data.status === 200) {
        console.log(response)
      }
    })
  }

  const verifyAccount = (data) => {
    return axiosInstance.post(ENDPOINTS.verifyAccount, data).then((response) => {
      if(!!response && response.status === 200) {
        console.log(response)
      }
    })
  }

  const forgotPassword = (data) => {
    return axiosInstance.post(ENDPOINTS.forgotPassword, data).then((response) => {
      if(!!response && response.status === 200) {
        console.log(response)
      }
    })
  }

  const resetPassword = (data) => {
    return axiosInstance.post(ENDPOINTS.resetPassword, data).then((response) => {
      if(!!response && response.status === 200) {
        console.log(response)
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        registerStep,
        setRegisterStep,
        authState,
        setAuthState,
        showAuthModal,
        setShowAuthModal,
        login,
        logout,
        signup,
        verifyAccount,
        forgotPassword,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
