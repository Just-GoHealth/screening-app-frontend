import JustGoLogo from "../justgo-logo/justgo-logo.jsx";
import { useAuthContext } from "../../context/auth/AuthContext.jsx";

const AuthModal = ({ children }) => {
  const {authState, setAuthState} = useAuthContext()
  return (
    <div className="bg-white w-9/12 min-h-[60%] border-8 border-primary rounded-2xl flex flex-col justify-between">
      <div className="flex justify-between items-center p-8">
        <JustGoLogo/>
        <button onClick={() => setAuthState(authState === 'login' ? 'signup' : 'login')} className="bg-bgLightBlue py-1 px-3 rounded">
          {authState === 'login' ? 'Get Started' : 'Sign in instead'}
        </button>
      </div>
      {children}
    </div>
  )
}

AuthModal.displayName = 'AuthModal'
export default AuthModal