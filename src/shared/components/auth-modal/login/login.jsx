import { useState } from "react";
import LoginForm from "./login-form.jsx";
import FindAccount from "./find-account.jsx";
import Otp from "../../auth-modal/otp.jsx";
import SetPassword from "./set-password.jsx";

const LogIn = () => {
  const [loginState, setLoginState] = useState('login')

  const checkLoginState = () => {
    switch (loginState) {
      case 'login':
        return <LoginForm setLoginState={setLoginState}/>
      case 'verify':
        return <Otp/>
      case 'recovery':
        return <FindAccount/>
      case 'set-password':
        return <SetPassword/>
      default:
        return <LoginForm/>
    }
  }

  return (
      <div className="">
        {checkLoginState()}
      </div>
  )
}

LogIn.displayname = 'Login'

export default LogIn