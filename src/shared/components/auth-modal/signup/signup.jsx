import React from 'react'
import SignUpForm from './signup-form';
import Otp from '../otp';
import Activation from './activation';
import { useAuthContext } from '../../../context/auth/AuthContext';

const SignUp = () => {
  const {registerStep} = useAuthContext()
  const registrationStep = () => {
    switch (registerStep) {
      case "register":
        return <SignUpForm />;
      case "verify":
        return <Otp />;
      case "activation":
        return <Activation />;
    }
  };
  return <>{registrationStep()}</>;
};

export default SignUp;
