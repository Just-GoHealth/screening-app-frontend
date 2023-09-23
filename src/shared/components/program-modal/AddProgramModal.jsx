import React from "react";
import { IconButton } from "@mui/material";
import { AiOutlineLeft } from "react-icons/ai";
import JustGoLogo from "../justgo-logo/justgo-logo";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSchoolContext } from "../../context/SchoolContext";
import { useMutation } from "react-query";

const programLevels = [
  {
    value: "",
    label: "Program Level",
    disabled: true,
  },
  {
    value: "Primary School",
    label: "Primary School",
  },
  {
    value: "Junior High School",
    label: "Junior High School",
  },
  {
    value: "Senior High School",
    label: "Senior High School",
  },
];

const AddProgramModal = ({ setIsOpen }) => {
  const { addProgram } = useSchoolContext();

  const initialValues = {
    school_name: "",
    school_location: "",
    school_type: "",
    coordinator: "",
    mobile: "",
    email: "",
  };

  const programSchema = Yup.object().shape({
    school_name: "",
    school_location: "",
    school_type: "",
    coordinator: "",
    mobile: Yup.number()
      .required("Please enter your phone number")
      .min(10, "Please enter a valid phone number"),
    email: Yup.string().required("Please enter your email"),
  });

  const addProgramMutation = useMutation(addProgram, {
    onSuccess: (success) => {
      console.log(success);
      setIsOpen(false);
    },
  });

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 z-40" />

      <div className="fixed inset-0 overflow-y-auto z-50">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="flex flex-col gap-3 p-6 w-full max-w-7xl overflow-hidden rounded-2xl bg-white border-8 border-primary text-left align-middle shadow-xl transition-all">
            <div className="flex justify-between items-center">
              <IconButton
                onClick={() => setIsOpen(false)}
                size="small"
                style={{ background: "#BCBEC0" }}
              >
                <AiOutlineLeft color="white" />
              </IconButton>

              <JustGoLogo />
            </div>

            <h2 className="text-3xl text-primaryBlue font-bold text-center">
              Create Program
            </h2>

            <Formik
              validationSchema={programSchema}
              initialValues={initialValues}
              onSubmit={(data) => addProgramMutation.mutate(data)}
            >
              {() => {
                return (
                  <Form>
                    <div className="container m-auto grid grid-cols-[minmax(64px,_auto)_1fr] gap-3 items-start text-lg">
                      <h3 className="font-semibold text-primary">Program ID</h3>
                      <div>
                        <div>
                          Enter the <b>name</b> and <b>email</b> of the
                          organization
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-2 mb-3">
                          <Field
                            name="school_name"
                            className="form-input"
                            placeholder="Program Name"
                          />

                          <Field
                            name="email"
                            className="form-input"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <h3 className="font-semibold text-primary">Profile</h3>
                      <div>
                        <div>
                          Give the <b>location</b> and <b>level</b> of the
                          students
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-2 mb-3">
                          <Field
                            name="school_location"
                            className="form-input"
                            placeholder="Location"
                          />

                          <Field
                            as="select"
                            name="school_type"
                            className="form-input"
                            placeholder="Program Level"
                          >
                            {programLevels?.map((level) => (
                              <option
                                key={level.value}
                                value={level.value}
                                disabled={level.disabled}
                              >
                                {level.label}
                              </option>
                            ))}
                          </Field>
                        </div>
                      </div>

                      <h3 className="font-semibold text-primary">
                        Coordinator
                      </h3>
                      <div>
                        <div>
                          Add the <b>full name</b> and <b>contact</b> of the
                          coordinator
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-2 mb-3">
                          <Field
                            name="coordinator"
                            className="form-input"
                            placeholder="Full Name"
                          />

                          <Field
                            name="mobile"
                            className="form-input"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex justify-end mt-8">
                      <button
                        type="submit"
                        className="auth-button border-primary bg-primaryLight text-white text-2xl"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProgramModal;
