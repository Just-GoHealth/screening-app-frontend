import { useAuthContext } from "../../../context/auth/AuthContext";
import Heading from "../../heading/heading";
import { BsCheckCircle } from "react-icons/bs";

const Activation = () => {
  const { setShowAuthModal, setRegisterStep } = useAuthContext();
  return (
    <div className="w-6/12 mx-auto grid place-items-center pb-8">
      <div className="flex items-center space-x-3">
        <BsCheckCircle className="text-4xl text-gray-400" />
        <Heading title="Activation - Pending" />
      </div>
      <div className="space-y-3">
        <p className="text-center text-lg">
          You have successfully created an account with us. Our Managers will
          activate your account as soon as possible. You mental health guide to
          help you identify any concerns you may should receive the activation
          mail before{" "}
          <span className="font-bold text-primaryBlue">72 hours.</span>
        </p>
        <hr className="border-gray-400 border-1" />
        <p className="text-center text-lg">
          You can reach out to us{" "}
          <span className="font-bold text-primaryBlue">(0204679562)</span> if
          you had already been activated.
        </p>
      </div>
      <button
        onClick={() => {
          setShowAuthModal(false);
          setRegisterStep("register");
        }}
        className="auth-button  text-primary border-primary mt-10"
      >
        Close
      </button>
    </div>
  );
};

Activation.displayName = "Activation";

export default Activation;
