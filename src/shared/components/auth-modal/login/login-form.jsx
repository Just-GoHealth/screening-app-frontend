import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Heading from "../../heading/heading.jsx";
import { useMutation } from "react-query";
import { useAuthContext } from "../../../context/auth/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setLoginState }) => {
  const { login, routeAfterLogin, setShowAuthModal } = useAuthContext();
  const navigate = useNavigate();

  const loginMutation = useMutation(login, {
    onSuccess: (success) => {
      console.log(success);
      setShowAuthModal(false);
      navigate(routeAfterLogin);
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Please enter your email"),
    password: Yup.string().required("Please enter your email"),
  });

  const handleSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <Heading title="Welcome Back!" />
      <p className="text-center text-gray-500">
        Sign into your account and start screening
      </p>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form className="text-gray-400">
              {/* Email */}
              <div className="w-10/12 md:w-8/12 lg:w-6/12 space-y-3 mx-auto">
                <Field
                  name="email"
                  className="form-input"
                  placeholder="Email"
                />
                {/* Password */}
                <Field
                  name="password"
                  className="form-input"
                  placeholder="Password"
                  type="password"
                />

                <p className="text-center font-bold text-lg">
                  Don't remember password?
                  <span
                    className="text-bgLightBlue cursor-pointer"
                    onClick={() => setLoginState("recovery")}
                  >
                    {" "}
                    Recover account {">"}
                  </span>
                </p>
              </div>
              <div className="flex justify-end pr-5 pb-5">
                <button
                  type="submit"
                  disabled={loginMutation.isLoading}
                  className="auth-button border-primary bg-primaryLight text-white mt-5"
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

LoginForm.displayName = "Login Form";

export default LoginForm;
