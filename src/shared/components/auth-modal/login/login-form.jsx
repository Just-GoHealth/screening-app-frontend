import { Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import Heading from "../../heading/heading.jsx";

const LoginForm = ({ setLoginState }) => {

  const initialValues = {
    email: '',
    password: '',
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your email'),
    password: Yup.string().required('Please enter your email'),
  })

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Heading title="Welcome Back!"/>
      <p className="text-center text-gray-500">Sign into your account and start screening</p>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        {({ values }) => {
          console.log(values)
          return (
            <Form className="text-gray-400 p-8">
              {/* Email */}
              <div className="w-6/12 space-y-3 mx-auto">
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
                />

                <p className="text-center font-bold text-lg">Don't remember password?
                  <span
                    className="text-bgLightBlue cursor-pointer"
                    onClick={() => setLoginState('recovery')}> Recover account {'>'}
                </span>
                </p>
              </div>
              <div className="flex justify-end">
                <button className="auth-button border-primary bg-primaryLight text-white mt-5">Submit</button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  );
}

  LoginForm.displayName = 'Login Form'

  export default LoginForm