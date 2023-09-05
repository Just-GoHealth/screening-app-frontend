import JustGoLogo from "../justgo-logo/justgo-logo.jsx";
import { useAuthContext } from "../../context/auth/AuthContext.jsx";

const AuthModal = ({ children }) => {
  const { authState, setAuthState, setRegisterStep } = useAuthContext();
  return (
    <div className="md:p-0 bg-white w-full md:w-9/12 lg:w-10/12 md:min-h-[60%] border-8 border-primary rounded-2xl flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between items-center p-8">
        <JustGoLogo />
        <button
          onClick={() => {
            setRegisterStep("register");
            setAuthState(prev => prev === "login" ? "signup" : "login");
          }}
          className="bg-bgLightBlue py-1 px-3 rounded"
        >
          {authState === "login" ? "Get Started" : "Sign in instead"}
        </button>
      </div>
      {children}
    </div>
  );
};

AuthModal.displayName = "AuthModal";
export default AuthModal;
