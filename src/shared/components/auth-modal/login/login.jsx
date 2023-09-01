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
        return <Otp setLoginState={setLoginState}/>
      case 'recovery':
        return <FindAccount setLoginState={setLoginState}/>
      case 'set-password':
        return <SetPassword setLoginState={setLoginState}/>
      default:
        return <LoginForm setLoginState={setLoginState}/>
    }
  }

  return (
      <div>
        {checkLoginState()}
      </div>
  )
}

LogIn.displayname = 'Login'

export default LogIn