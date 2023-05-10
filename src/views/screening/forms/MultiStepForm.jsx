import React, { useEffect, useState } from "react";
import data from "../../../shared/data/data.json";
import useMultiStepHook from "../../../shared/custom-hooks/useMultiStepForm";
import {
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
} from "@mui/material";
import {
  FormNavigation,
  QuestionField,
} from "../../../shared/components/form/screening";

const MultiStepForm = ({
  selectedSection,
  selectedSubSection,
  handleSelectedSection,
  handleSelectedSubSection,
}) => {
  const [formData, setFormData] = useState({});
  const [formQuestions, setFormQuestions] = useState(
    data.data
      .find((data) => data.id === selectedSection)
      .subSections.find((subSection) => subSection.id === selectedSubSection)
      .questions
  );

  useEffect(() => {
    const newQuestions = data.data
      .find((data) => data.id === selectedSection)
      .subSections.find(
        (subSection) => subSection.id === selectedSubSection
      ).questions;
    setFormQuestions(newQuestions);
    console.log(newQuestions);
  }, [selectedSection, selectedSubSection]);

  const styles = {
    dropdown: {
        width: '100%',
    },
    squareRadioButton: {
      border: "2px solid #ACAEB0",
      color: "#ACAEB0",
      borderRadius: "10px",
      width: "3rem",
      height: "2.5rem",
      marginRight: "0.5rem",
    },
    circularRadioButton: {
      border: "2px solid #ACAEB0",
      color: "#ACAEB0",
      borderRadius: "50%",
      width: "2.5rem",
      height: "2.5rem",
    },
    squircleRadioButton: {
      border: "2px solid #ACAEB0",
      color: "#ACAEB0",
      borderRadius: "10px",
      minWidth: "3rem",
      height: "2.5rem",
      marginRight: "0.5rem",
    },
  };
  return (
    <div className="px-5 pb-5 h-full">
      <h1 className="screening_heading">Medical Profile</h1>

      <form className="space-y-7">
        {formQuestions.map((question) => {
          switch (question.type) {
            case "input":
              return (
                <QuestionField
                  title={question.title}
                  subtitle={question.subTitle}
                  control={
                    <>
                      <TextField size="small" fullWidth />
                    </>
                  }
                  info={question.info}
                />
              );
            case "dropdown":
              return (
                <QuestionField
                  title={question.title}
                  subtitle={question.subTitle}
                  control={
                    <Select value={""} fullWidth>
                      {question.options.map((option) => (
                        <MenuItem value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                  }
                />
              );
            case "circularRadio":
              return (
                <QuestionField
                  title={question.title}
                  subtitle={question.subTitle}
                  control={
                    <>
                      <ToggleButtonGroup exclusive aria-label="gender">
                        {question.options.map((age) => (
                          <ToggleButton
                            value={age}
                            style={{
                              ...styles.circularRadioButton,
                              marginRight: "0.5rem",
                            }}
                          >
                            {age}
                          </ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    </>
                  }
                  info={question.info}
                />
              );
            case "squareRadio":
              return (
                <QuestionField
                  title={question.title}
                  subtitle={question.subTitle}
                  control={
                    <>
                      <ToggleButtonGroup exclusive aria-label="gender">
                        {question.options.map((option) => (
                          <ToggleButton
                            value={option}
                            style={{ ...styles.squareRadioButton }}
                          >
                            {option}
                          </ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    </>
                  }
                  info={question.info}
                />
              );
            case "squircicleRadio":
              return (
                <QuestionField
                  title={question.title}
                  subtitle={question.subTitle}
                  control={
                    <>
                      <ToggleButtonGroup>
                        {question.options.map((option) => (
                          <ToggleButton
                            value={option.value}
                            style={{ ...styles.squircleRadioButton }}
                          >
                            {option.name}
                          </ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    </>
                  }
                  info={question.info}
                />
              );
          }
        })}

        <FormNavigation user={"Lucas Hernandez"} />
      </form>
    </div>
  );
};

export default MultiStepForm;
