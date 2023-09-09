import React, { createContext, useContext, useState } from "react";
import { axiosInstance } from "../axiosInstance.js";
import { useCookies } from "react-cookie";
import { ENDPOINTS } from "../../endpoints/endpoints.js";

export const AuthContext = createContext(undefined);
export const AuthContextProvider = ({ children }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authState, setAuthState] = useState("signup");
  const [registerStep, setRegisterStep] = useState("register");
  const [routeAfterLogin, setRouteAfterLogin] = useState("/all-health-records");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // Access the cookies as needed
  const user = cookies.user;

  const isAlpha = () => {
    return user.role === "Admin";
  };

  const logout = () => {
    removeCookie("user", { path: "/" });
    window.location.assign("/");
  };

  const login = async (data) => {
    return axiosInstance.post(ENDPOINTS.login, data).then((response) => {
      if (!!response && response.data.user && response.data.userToken) {
        setCookie(
          "user",
          { ...response.data.user, userToken: response.data.userToken },
          {
            path: "/",
          }
        );
        return response.data;
      }
    });
  };

  const signup = (data) => {
    return axiosInstance.post(ENDPOINTS.signup, data);
  };

  const verifyAccount = (data) => {
    return axiosInstance
      .post(ENDPOINTS.verifyAccount, data)
      .then((response) => {
        if (!!response && response.status === 200) {
          console.log(response);
        }
      });
  };

  const forgotPassword = (data) => {
    return axiosInstance
      .post(ENDPOINTS.forgotPassword, data)
      .then((response) => {
        if (!!response && response.status === 200) {
          console.log(response);
        }
      });
  };

  const resetPassword = (data) => {
    return axiosInstance
      .post(ENDPOINTS.resetPassword, data)
      .then((response) => {
        if (!!response && response.status === 200) {
          console.log(response);
        }
      });
  };

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
        routeAfterLogin,
        setRouteAfterLogin,
        isAlpha,
        login,
        logout,
        signup,
        verifyAccount,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
