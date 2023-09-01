import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../heading/heading";
import { useAuthContext } from "../../../context/auth/AuthContext";

const SignUpForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [maxLength, setMaxLength] = useState(10);
  const { setRegisterStep } = useAuthContext();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    terms: false,
  };

  const signUpValidation = Yup.object().shape({
    fullName: Yup.string().required("Please enter your full name"),
    // email: Yup.string()
    //   .email("Please enter a valid email address")
    //   .required("Please enter your email address"),
    // password: Yup.string()
    //   .test(
    //     "Password must have 8 or more characters, upper and lowercase letters, & at least one number",
    //     (value) => (value ? /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/ : false)
    //   )
    //   .min(8, "Password must have 8 or more characters")
    //   .required("Please enter your password"),
    // phone: Yup.number().required("Please enter your phone number"),
    // terms: Yup.bool().oneOf([true], "Please accept terms and conditions"),
  });

  const handleSubmit = (data) => {
    console.log(data);
    setRegisterStep('verify')
  };

  return (
    <>
      <Heading title="JustGo Health Account" />
      <p className="text-center text-gray-500 mb-3">
        Get started screening to understand your wellbeing.
      </p>
      <Formik
        validationSchema={signUpValidation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => {
          return (
            <Form className="space-y-3 text-gray-400">
              <div className="w-6/12 mx-auto space-y-3">
                {/* Full name */}
                <Field
                  name="fullName"
                  className="form-input"
                  placeholder="Full Name"
                />
                {/* Email */}
                <Field
                  name="email"
                  className="form-input"
                  placeholder="Email"
                />
                {/*Password*/}
                <div className="relative">
                  <Field
                    name="password"
                    className="form-input"
                    placeholder="Password"
                    type={viewPassword ? "text" : "password"}
                  />
                  <p className="mx-4 pt-1 text-xs">
                    Password must have 8 or more characters, upper and lowercase
                    letters, & at least one number.
                  </p>
                </div>
                {/* Phone number */}
                <div className="relative">
                  <Field name="phone">
                    {({ field }) => (
                      <input
                        {...field}
                        // onChange={(e) => {
                        //   setMaxLength(
                        //     (value) => value - e.target.value.length
                        //   );
                        //   setFieldValue("phone", e.target.value);
                        // }}
                        className="form-input"
                        placeholder="Phone number"
                        maxLength={maxLength}
                      />
                    )}
                  </Field>
                  <p className="absolute font-semibold top-4 right-5">
                    {maxLength}
                  </p>
                </div>

                <label className="ml-5 flex space-x-3 items-center">
                  <Field name="terms" type="checkbox" as="input" />
                  <p>
                    Agree to{" "}
                    <Link to="" className="font-bold text-gray-500">
                      Terms & Conditions
                    </Link>
                  </p>
                </label>
              </div>
              <div className="flex w-full justify-between items-center border-t-2 border-gray-300 py-5 px-8">
                <div></div>
                <p>Tracker</p>
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
