import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Heading from "../../heading/heading.jsx";
import { useAuthContext } from "../../../context/auth/AuthContext.jsx";
import { useMutation } from "react-query";
import useValidate from "../../../custom-hooks/useValidate.jsx";

const FindAccount = ({ setLoginState }) => {
  const { forgotPassword } = useAuthContext()
  const forgotPasswordMutation = useMutation(forgotPassword, {
    onSuccess: (success) => {
      console.log(success)
      // setLoginState('verify')
    },
  })

  const initialValues = {
    email: "",
  };

  const findAccountSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required("Please enter your email"),
  });

  const handleSubmit = (data) => {
    forgotPasswordMutation.mutate(data)
  };

  return (
    <div>
      <Heading title="Find Your Account"/>
      <p className="text-center text-gray-500 text-sm">
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
              <div className="w-10/12 md:w-8/12 lg:w-6/12 space-y-3 mx-auto mb-10 lg:mb-20">
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
                <p></p>
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
    </div>
  );
};

FindAccount.displayName = "Find Account";

export default FindAccount;
