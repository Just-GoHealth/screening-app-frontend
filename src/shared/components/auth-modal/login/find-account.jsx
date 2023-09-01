import { Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import Heading from "../../heading/heading.jsx";

const FindAccount = ({ setLoginState }) => {

  const initialValues = {
    email: '',
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Please enter your email'),
  })

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}>
        {({ values }) => {
          console.log(values)
          return (
            <Form className="text-gray-400">
              <Heading title="Find Your Account"/>
              <p className="text-center text-gray-500">Enter your email address you used to register</p>
              {/* Email */}
              <div className="w-6/12 space-y-3 mx-auto">
                <Field
                  name="email"
                  className="form-input"
                  placeholder="Email"
                />
              </div>
              <div className="flex w-full justify-around items-center border-t-2 border-gray-300 py-5 px-16">
                <button
                  className="auth-button text-primary border-primary"
                >
                  Back
                </button>
                <p>Tracker</p>
                <button
                  className="auth-button bg-primaryLight text-white border-primary"
                >
                  Next
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  );
}

FindAccount.displayName = 'Find Account'

export default FindAccount