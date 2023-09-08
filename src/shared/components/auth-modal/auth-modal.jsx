import JustGoLogo from "../justgo-logo/justgo-logo.jsx";
import { useAuthContext } from "../../context/auth/AuthContext.jsx";
import Modal from "../modal/modal.jsx";

const AuthModal = ({ children }) => {
  const { authState, setAuthState, setRegisterStep } = useAuthContext();
  return (
    <Modal>
      <div className="flex flex-col md:flex-row justify-between items-center p-8">
        <JustGoLogo/>
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
    </Modal>
  )
};

AuthModal.displayName = "AuthModal";
export default AuthModal;
