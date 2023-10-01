import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Heading from "../../heading/heading";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { useMutation } from "react-query";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useValidate from "../../../custom-hooks/useValidate.jsx";

const SignUpForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [maxLength, setMaxLength] = useState(10);
  const [email, setEmail] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const { setRegisterStep, signup } = useAuthContext();

  const signUpMutation = useMutation(signup, {
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      setSearchParams({ email });
      setRegisterStep('verify')
    },
  })

  const initialValues = {
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    terms: false,
  };

  const signUpValidation = Yup.object().shape({
    full_name: Yup.string().required("Please enter your full name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
        "Password must have 8 or more characters, upper and lowercase letters, & at least one number",
      )
      .min(8, "Password must have 8 or more characters")
      .required("Please enter your password"),
    phone_number: Yup.number().required("Please enter your phone number").min(10, 'Please enter a valid phone number'),
    terms: Yup.bool().oneOf([true], "Please accept terms and conditions"),
  });

  const handleSubmit = (data) => {
    setEmail(data.email)
    const modifiedData = { ...data }
    delete modifiedData.terms
    signUpMutation.mutate(modifiedData)
  };

  return (
    <>
      <Heading title="JustGo Health Account"/>
      <p className="text-center text-gray-500 mb-3 text-sm">
        Get started screening to understand your wellbeing.
      </p>
      <Formik
        validationSchema={signUpValidation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors, setFieldValue }) => {
          return (
            <Form className="space-y-3 text-gray-400">
              <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto space-y-3">
                {/* Full name */}
                <Field
                  name="full_name"
                  className="form-input"
                  placeholder="Full Name"
                />
                {useValidate(errors.full_name)}
                {/* Email */}
                <Field
                  name="email"
                  className="form-input"
                  placeholder="Email"
                />
                {useValidate(errors.email)}
                {/*Password*/}
                <div className="relative">
                  <Field
                    name="password"
                    className="form-input"
                    placeholder="Password"
                    type={viewPassword ? "text" : "password"}
                  />
                  <span onClick={() => setViewPassword(!viewPassword)} className="absolute text-lg top-4 right-3 cursor-pointer">
                    {viewPassword ? (
                      <AiOutlineEyeInvisible/>
                    ) : (
                    <AiOutlineEye/>
                    )}
                  </span>
                  {useValidate(errors.password, 'Password must have 8 or more characters, upper and lowercase letters, & at least one number')}
                </div>
                {/* Phone number */}
                <div className="relative">
                  <Field name="phone_number">
                    {({ field }) => (
                      <input
                        {...field}
                        onChange={(e) => {
                          setMaxLength(10 - e.target.value.length);
                          setFieldValue("phone_number", e.target.value);
                        }}
                        className="form-input"
                        placeholder="Phone number"
                        maxLength={10}
                      />
                    )}
                  </Field>
                  {useValidate(errors.phone_number)}
                  <p className="absolute font-semibold top-4 right-5">
                    {maxLength}
                  </p>
                </div>

                <label className="ml-5 flex space-x-3 items-center">
                  <Field name="terms" type="checkbox" as="input"/>
                  <p>
                    Agree to{" "}
                    <Link to="" className="font-bold text-gray-500">
                      Terms & Conditions
                    </Link>
                  </p>
                </label>
                {useValidate(errors.terms)}
              </div>
              <div className="flex w-full justify-between items-center border-t-2 border-gray-300 py-5 px-8">
                <div></div>
                <p></p>
                <button
                  type="submit"
                  className="auth-button bg-primaryLight text-white border-primary"
                >
                  Next
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
SignUpForm.displayName = "SignUpForm";
export default SignUpForm;
