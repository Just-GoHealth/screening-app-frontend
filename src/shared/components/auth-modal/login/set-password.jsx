import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Heading from "../../heading/heading.jsx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useAuthContext } from "../../../context/auth/AuthContext.jsx";
import useValidate from "../../../custom-hooks/useValidate.jsx";
import { useMutation } from "react-query";

const SetPassword = ({ setLoginState }) => {
  const { resetPassword } = useAuthContext()
  const [viewPassword, setViewPassword] = useState(false)
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const resetPasswordMutation = useMutation(resetPassword, {
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      setLoginState("verify");
    }
  })

  const setPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
        "Password must have 8 or more characters, upper and lowercase letters, & at least one number",
      )
      .min(8, "Password must have 8 or more characters")
      .required("Please enter your password"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords do not match"
    ),
  });

  const handleSubmit = (data) => {
    resetPasswordMutation.mutate(data)
  };

  return (
    <>
      <Formik
        validationSchema={setPasswordSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors }) => {
          return (
            <Form className="text-gray-400">
              <div className="w-6/12 space-y-3 mx-auto mb-20">
                <div>
                  <Heading title="Create Password"/>
                  <p className="text-gray-500">
                    Password must have 8 or more characters, upper and lowercase
                    letters, and at least one number.
                  </p>
                </div>

                {/* Email */}
                <div className="relative">
                  <Field
                    name="password"
                    className="form-input"
                    placeholder="Password"
                    type={viewPassword ? 'text' : 'password'}
                  />
                  {useValidate(errors.password)}
                  <span onClick={() => setViewPassword(!viewPassword)}
                        className="absolute text-lg top-4 right-3 cursor-pointer">
                    {viewPassword ? (
                      <AiOutlineEyeInvisible/>
                    ) : (
                      <AiOutlineEye/>
                    )}
                  </span>
                </div>
                <div className="relative">
                  <Field
                    name="confirmPassword"
                    className="form-input"
                    placeholder="Repeat Password"
                    type={viewPassword ? 'text' : 'password'}
                  />
                  {useValidate(errors.confirmPassword)}
                  <span onClick={() => setViewPassword(!viewPassword)}
                        className="absolute text-lg top-4 right-3 cursor-pointer">
                    {viewPassword ? (
                      <AiOutlineEyeInvisible/>
                    ) : (
                      <AiOutlineEye/>
                    )}
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-around items-center border-t-2 border-gray-300 py-5 px-16">
                <div></div>
                <p></p>
                <button
                  type="submit"
                  className="auth-button bg-primaryLight text-white border-primary"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

SetPassword.displayName = "Set Password";

export default SetPassword;
