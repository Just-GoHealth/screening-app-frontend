import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Heading from "../../heading/heading.jsx";
import { useAuthContext } from "../../../context/auth/AuthContext.jsx";
import { useMutation } from "react-query";
import useValidate from "../../../custom-hooks/useValidate.jsx";

const FindAccount = ({ setLoginState }) => {
  const { forgotPassword } = useAuthContext()
  const forgotPasswordMutation = useMutation(forgotPassword, {
    onSuccess: () => {
      setLoginState('verify')
    },
  })

  const initialValues = {
    email: "",
  };

  const findAccountSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required("Please enter your email"),
  });

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading title="Find Your Account"/>
      <p className="text-center text-gray-500">
        Enter your email address you used to register
      </p>
      <Formik
        validationSchema={findAccountSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors }) => {
          return (
            <Form className="text-gray-400">
              {/* Email */}
              <div className="w-6/12 space-y-3 mx-auto mb-20">
                <Field
                  name="email"
                  className="form-input"
                  placeholder="Email"
                />
                {useValidate(errors.email)}
              </div>
              <div className="flex w-full justify-around items-center border-t-2 border-gray-300 py-5 px-16">
                <button
                  onClick={() => setLoginState("login")}
                  type="button"
                  className="auth-button text-primary border-primary"
                >
                  Back
                </button>
                <p>Tracker</p>
                <button
                  disabled={forgotPasswordMutation.isLoading}
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

FindAccount.displayName = "Find Account";

export default FindAccount;
