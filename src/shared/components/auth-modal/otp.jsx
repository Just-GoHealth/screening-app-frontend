import { useRef, useState } from "react";
import Heading from "../heading/heading.jsx";
import { useAuthContext } from "../../context/auth/AuthContext.jsx";

const Otp = () => {
  const { setRegisterStep } = useAuthContext();
  const [otpArray, setOtpArray] = useState([]);
  const otpLength = 6;
  const otpContainer = useRef();

  function handleValue(e, inputIndex) {
    // get list of otp inputs
    const children = otpContainer?.current?.children;
    const keyPressed = e.key;
    if (
      inputIndex > 0 &&
      (keyPressed === "Backspace" || keyPressed === "Delete")
    ) {
      setOtpArray((arr) => {
        arr[inputIndex] = null;
        return arr;
      });
      setTimeout(() => {
        children[inputIndex - 1].focus();
      }, 100);
    } else {
      if (isNaN(Number(keyPressed))) {
        setOtpArray((arr) => {
          arr[inputIndex] = null;
          return arr;
        });
        return;
      } else if (inputIndex < otpLength - 1) {
        // if not last input focus on next input
        setTimeout(() => {
          children[inputIndex + 1].focus();
        }, 100);
      }
      // If values in otp array are not null or empty string call validation function
      if (
        !otpArray.some((value) => value === null || value === "") &&
        otpArray.length === otpLength
      ) {
        console.log("complete");
        setRegisterStep("activation");
        // validate function here
      }
    }
  }

  return (
    <>
      <div className="w-6/12 mx-auto mb-16">
        <Heading title="Enter Verification Code" />
        <p className="text-center text-lg text-gray-500">
          A 6-digit verification code was just sent to email@x.com
        </p>
        <div
          ref={otpContainer}
          className="flex justify-between items-center space-x-2"
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <input
              key={index}
              maxLength={1}
              onChange={(e) => {
                setOtpArray((arr) => {
                  arr[index] = e?.target?.value;
                  return arr;
                });
              }}
              onKeyUp={(e) => handleValue(e, index)}
              className="form-input h-20 text-primaryBlue p-2 text-center lg:text-[30px] border-6 focus:border-primaryBlue horizontal-cursor"
              style={{
                caret: "gray underscore",
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between items-center border-t-2 border-gray-300 py-5 px-8">
      <button
          onClick={() => setRegisterStep('register')}
          className="auth-button text-primary border-primary"
        >
          Back
        </button>
        <p>Tracker</p>
        <div></div>
      </div>
    </>
  );
};

export default Otp;
