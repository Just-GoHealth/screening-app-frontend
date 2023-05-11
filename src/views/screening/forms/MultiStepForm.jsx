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
  const [currentSection, setCurrentSection] = useState(
    data.data.find((data) => data.id === selectedSection)
  );
  const subSections = currentSection ? currentSection.subSections : [];
  const {
    steps,
    step,
    currentStepIndex,
    setCurrentStepIndex,
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepHook(subSections);

  

  useEffect(() => {
    setCurrentStepIndex(0);
  }, [selectedSection]);

  useEffect(() => handleSelectedSubSection(step.id), [step]);

  useEffect(() => {
    setCurrentSection(data.data.find((data) => data.id === selectedSection));
    const currentStep = steps.find((step) => step.id === selectedSubSection)
    setCurrentStepIndex(steps.indexOf(currentStep))
  }, [selectedSection, selectedSubSection]);

  const handleFormInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const styles = {
    dropdown: {
      width: "100%",
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

  const renderQuestion = (question) => {
    switch (question.type) {
      case "input":
        return (
          <QuestionField
            title={question.title}
            subtitle={question.subTitle}
            control={
              <>
                <TextField
                  size="small"
                  fullWidth
                  onChange={(e) =>
                    handleFormInputChange(question.name, e.target.value)
                  }
                />
              </>
            }
            info={question.info}
            key={question.id}
          />
        );
      case "dropdown":
        return (
          <QuestionField
            title={question.title}
            subtitle={question.subTitle}
            control={
              <Select
                value={""}
                fullWidth
                onChange={(e) =>
                  handleFormInputChange(question.name, e.target.value)
                }
              >
                {question.options.map((option, index) => (
                  <MenuItem value={option} key={index}>{option}</MenuItem>
                ))}
              </Select>
            }
            key={question.id}

          />
        );
      case "circularRadio":
        return (
          <QuestionField
            title={question.title}
            subtitle={question.subTitle}
            control={
              <>
                <ToggleButtonGroup
                  exclusive
                  aria-label="age"
                  onChange={(e, value) =>
                    handleFormInputChange(question.name, value)
                  }
                >
                  {question.options.map((age, index) => (
                    <ToggleButton
                      value={age}
                      style={{
                        ...styles.circularRadioButton,
                        marginRight: "0.5rem",
                      }}
                      key={index}
                    >
                      {age}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </>
            }
            info={question.info}
            key={question.id}

          />
        );
      case "squareRadio":
        return (
          <QuestionField
            title={question.title}
            subtitle={question.subTitle}
            control={
              <>
                <ToggleButtonGroup
                  exclusive
                  aria-label="gender"
                  onChange={(e, value) =>
                    handleFormInputChange(question.name, value)
                  }
                >
                  {question.options.map((option, index) => (
                    <ToggleButton
                      value={option}
                      style={{ ...styles.squareRadioButton }}
                      key={index}
                    >
                      {option}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </>
            }
            info={question.info}
            key={question.id}
          />
        );
      case "squircicleRadio":
        return (
          <QuestionField
            title={question.title}
            subtitle={question.subTitle}
            control={
              <>
                <ToggleButtonGroup
                  onChange={(e, value) =>
                    handleFormInputChange(question.name, value)
                  }
                >
                  {question.options.map((option, index) => (
                    <ToggleButton
                      value={option.value}
                      style={{ ...styles.squircleRadioButton }}
                      key={index}
                    >
                      {option.name}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </>
            }
            info={question.info}
            key={question.id}
          />
        );
    }
  };
  return (
    <div className="px-5 pb-5 h-full">
      <h1 className="screening_heading">Medical Profile</h1>

      <form className="space-y-7">
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: currentStepIndex === index ? "block" : "none" }}
          >
            {step.questions.map((question) => renderQuestion(question))}
          </div>
        ))}

        <FormNavigation
          user={"Lucas Hernandez"}
          onPreviousPageClick={previousStep}
          onNextPageClick={nextStep}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          handleFormSubmit={handleFormSubmit}
        />
      </form>
    </div>
  );
};

export default MultiStepForm;
