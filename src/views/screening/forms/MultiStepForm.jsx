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
import { useNavigate } from "react-router-dom";

const MultiStepForm = ({
  selectedSection,
  selectedSubSection,
  handleSelectedSection,
  handleSelectedSubSection,
}) => {
  const [formData, setFormData] = useState({});
  const [isStepComplete, setIsStepComplete] = useState(false);
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

  console.log("steps");
  console.log(steps);
  steps.forEach((element) => {
    console.log(element.questions);
  });

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStepIndex(0);
    console.log(currentSection);
    console.log("current section");
  }, [selectedSection]);

  useEffect(() => handleSelectedSubSection(step.id), [step]);

  useEffect(() => {
    setCurrentSection(data.data.find((data) => data.id === selectedSection));
    const currentStep = steps.find((step) => step.id === selectedSubSection);
    setCurrentStepIndex(steps.indexOf(currentStep));
  }, [selectedSection, selectedSubSection]);

  const handleFormInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    const currentStep = steps[currentStepIndex];
    console.log(
      currentStep.questions.map((question) => formData[question.name])
    );

    const isCurrentStepComplete = currentStep.questions.every((question) => {
      typeof formData[question.name] !== "undefined";
    });
    console.log("current step");
    console.log(isCurrentStepComplete);
    setIsStepComplete(isCurrentStepComplete);
  };

  useEffect(() => console.log("step complete changed"), [isStepComplete]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const index = data.data.indexOf(currentSection);
    if (index < data.data.length) {
      const nextSection = data.data[index + 1];
      handleSelectedSection(nextSection.id);
    } else {
      navigate("/");
    }
  };

  const handleNextStep = () => {
    nextStep();
  };

  const handleFormInputBlur = () => {
    const currentStep = steps[currentStepIndex];
    const isCurrentStepComplete = currentStep.questions.every(
      (question) => typeof formData[question.name] !== "undefined"
    );
    setIsStepComplete(isCurrentStepComplete);
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

  const renderQuestion = (question, index) => {
    if (!question) {
      return null;
    }

    const isQuestionUnanswered = typeof formData[question.name] === "undefined";

    const isPreviousQuestionUnanswered =
      steps[currentStepIndex].questions.length > 1
        ? index > 0 &&
          typeof formData[steps[currentStepIndex].questions[index - 1].name] ===
            "undefined"
        : false;
    const opacityStyle =
      isQuestionUnanswered && isPreviousQuestionUnanswered
        ? { opacity: 0.32, pointerEvents: "none" }
        : {};

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
                  value={formData[question.name] || ""}
                  onChange={(e) =>
                    handleFormInputChange(question.name, e.target.value)
                  }
                />
              </>
            }
            info={question.info}
            key={question.id}
            style={opacityStyle}
          />
        );
      case "dropdown":
        return (
          <QuestionField
            title={question.title}
            subtitle={question.subTitle}
            control={
              <Select
                value={formData[question.name] || ""}
                defaultValue={"Select your school"}
                fullWidth
                onChange={(e) =>
                  handleFormInputChange(question.name, e.target.value)
                }
                sx={{
                  height: 40,
                }}
              >
                {question.options.map((option, index) => (
                  <MenuItem value={option} key={index}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            }
            key={question.id}
            style={opacityStyle}
            info={question.info}
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
                  value={formData[question.name] || ""}
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
                        backgroundColor:
                          formData[question.name] === age
                            ? "#ACAEB0"
                            : undefined,
                        color:
                          formData[question.name] === age ? "white" : "#ACAEB0",
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
            style={opacityStyle}
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
                  value={formData[question.name] || ""}
                  onChange={(e, value) => {
                    handleFormInputChange(question.name, value);
                  }}
                >
                  {question.options.map((option, index) => (
                    <ToggleButton
                      value={option}
                      style={{
                        ...styles.squareRadioButton,
                        backgroundColor:
                          formData[question.name] === option
                            ? "#ACAEB0"
                            : undefined,
                        color:
                          formData[question.name] === option
                            ? "white"
                            : "#ACAEB0",
                      }}
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
            style={opacityStyle}
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
                  exclusive
                  value={formData[question.name] || ""}
                  onChange={(e, value) =>
                    handleFormInputChange(question.name, value)
                  }
                  sx={{ flexWrap: "wrap", gap: ".5rem" }}
                >
                  {question.options.map((option, index) => (
                    <ToggleButton
                      value={option.value}
                      style={{
                        ...styles.squircleRadioButton,
                        backgroundColor:
                          formData[question.name] === option.value
                            ? "#ACAEB0"
                            : undefined,
                        color:
                          formData[question.name] === option.value
                            ? "white"
                            : "#ACAEB0",
                      }}
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
            style={opacityStyle}
          />
        );
      case "yesOrNo":
        const selectedOption = formData[question.name] || "";
        const followUpQuestion = question.options.find(
          (option) => option.value === selectedOption
        )?.followUp;
        console.log(followUpQuestion);
        return (
          <>
            <QuestionField
              title={question.title}
              subtitle={question.subTitle}
              control={
                <>
                  <ToggleButtonGroup
                    value={selectedOption}
                    exclusive
                    onChange={(e, value) =>
                      handleFormInputChange(question.name, value)
                    }
                  >
                    {question.options.map((option, index) => (
                      <ToggleButton
                        value={option.value}
                        style={{
                          ...styles.squircleRadioButton,
                          backgroundColor:
                            formData[question.name] === option.value
                              ? "#ACAEB0"
                              : undefined,
                          color:
                            formData[question.name] === option.value
                              ? "white"
                              : "#ACAEB0",
                        }}
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
              style={opacityStyle}
            />

            {followUpQuestion && (
              <QuestionField
                title={followUpQuestion.title}
                subtitle={followUpQuestion.subTitle}
                control={
                  <>
                    {followUpQuestion.type === "input" && (
                      <TextField
                        size="small"
                        fullWidth
                        value={formData[followUpQuestion.name] || ""}
                        onChange={(e) =>
                          handleFormInputChange(
                            followUpQuestion.name,
                            e.target.value
                          )
                        }
                      />
                    )}

                    {followUpQuestion.type === "squircicleRadio" && (
                      <ToggleButtonGroup
                        exclusive
                        value={formData[followUpQuestion.name] || ""}
                        onChange={(e, value) =>
                          handleFormInputChange(followUpQuestion.name, value)
                        }
                        sx={{ flexWrap: "wrap", gap: ".5rem" }}
                      >
                        {followUpQuestion.options.map((option, index) => (
                          <ToggleButton
                            value={option.value}
                            style={{
                              ...styles.squircleRadioButton,
                              backgroundColor:
                                formData[followUpQuestion.name] === option.value
                                  ? "#ACAEB0"
                                  : undefined,
                              color:
                                formData[followUpQuestion.name] === option.value
                                  ? "white"
                                  : "#ACAEB0",
                            }}
                            key={index}
                          >
                            {option.name}
                          </ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    )}
                  </>
                }
                info={followUpQuestion.info}
                key={followUpQuestion.id}
                style={opacityStyle}
              />
            )}
          </>
        );
    }
  };
  return (
    <div className="px-5 pb-5 h-full">
      <h1 className="screening_heading">{currentSection.name}</h1>

      <form className="space-y-7">
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: currentStepIndex === index ? "block" : "none" }}
          >
            {step.questions.map((question, index) =>
              renderQuestion(question, index)
            )}
          </div>
        ))}

        <FormNavigation
          user={"Lucas Hernandez"}
          onPreviousPageClick={previousStep}
          onNextPageClick={handleNextStep}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          handleFormSubmit={handleFormSubmit}
          // isStepComplete={isStepComplete}
        />
      </form>
    </div>
  );
};

export default MultiStepForm;
