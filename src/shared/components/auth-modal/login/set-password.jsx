import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Heading from "../../heading/heading.jsx";

const SetPassword = ({ setLoginState }) => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const loginSchema = Yup.object().shape({
    password: Yup.string().required("Please enter your new password"),
    password: Yup.string().required("Please confirm your new password"),
  });

  const handleSubmit = (data) => {
    console.log(data);
    setLoginState("verify");
  };

  return (
    <>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values }) => {
          console.log(values);

          return (
            <Form className="text-gray-400">
              <div className="w-6/12 space-y-3 mx-auto mb-20">
                <div>
                  <Heading title="Create Password" />
                  <p className="text-gray-500">
                    Password must have 8 or more characters, upper and lowercase
                    letters, and at least one number.
                  </p>
                </div>

                {/* Email */}
                <Field
                  name="password"
                  className="form-input"
                  placeholder="Password"
                />
                <Field
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Repeat Password"
                />
              </div>
              <div className="flex w-full justify-around items-center border-t-2 border-gray-300 py-5 px-16">
              <div></div>
                <p>Tracker</p>
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
