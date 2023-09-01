import React, { createContext, useContext, useState } from "react";
// import Cookies from 'js-cookie';

export const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authState, setAuthState] = useState("signup");
  const [registerStep, setRegisterStep] = useState("register");
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   Cookies.get('isAuthenticated')
  //     ? JSON.parse(Cookies.get('isAuthenticated'))
  //     : false,
  // );
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        registerStep,
        setRegisterStep,
        isAuthenticated,
        setIsAuthenticated,
        authState,
        setAuthState,
        showAuthModal,
        setShowAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
