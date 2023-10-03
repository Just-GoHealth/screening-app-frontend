import {
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
} from "@mui/material";
import { QuestionField } from "../../../../shared/components/form/screening";
import { useState } from "react";

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

const renderQuestion = (
  question,
  index,
  formData,
  isMobileValid,
  isQuestionFilled,
  handleFormInputChange,
  step,
  schools,
  setFormDat
) => {
  if (!question) {
    return null;
  }

  const isQuestionUnanswered = typeof formData[question.name] === "undefined";

  const isPreviousQuestionUnanswered =
    step.questions?.length > 1
      ? index > 0 &&
        typeof formData[step.questions[index - 1].name] === "undefined"
      : false;
  const opacityStyle =
    isQuestionUnanswered && isPreviousQuestionUnanswered
      ? { opacity: 0.32, pointerEvents: "none" }
      : {};

  const sortedSchools = schools?.sort((a, b) => {
    return new Date(a.updatedAt) - new Date(b.updatedAt);
  });

  const reversedSchools = sortedSchools?.reverse();

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
                error={
                  question.name === "parentContact"
                    ? !isMobileValid && !isPreviousQuestionUnanswered
                    : !isQuestionFilled(question) &&
                      !isPreviousQuestionUnanswered
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
              error={!isQuestionFilled(question)}
            >
              {reversedSchools?.map((school, index) => (
                <MenuItem value={school.school_name} key={index}>
                  {school.school_name}
                </MenuItem>
              ))}
            </Select>
          }
          key={question.id}
          style={opacityStyle}
          info={question.info}
        />
      );
    case "multiple":
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
              error={!isQuestionFilled(question)}
            >
              {question.options?.map((option, index) => (
                <MenuItem value={option.name} key={option.id}>
                  {option.name}
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
                aria-label={question.name}
                value={formData[question.name] || ""}
                onChange={(e, value) =>
                  handleFormInputChange(question.name, value)
                }
                sx={{ flexWrap: "wrap" }}
              >
                {question.options.map((value, index) => (
                  <ToggleButton
                    value={value}
                    style={{
                      ...styles.circularRadioButton,
                      marginRight: "0.5rem",
                      backgroundColor:
                        formData[question.name] === value
                          ? "#003399"
                          : undefined,
                      borderColor:
                        formData[question.name] === value
                          ? "#003399"
                          : "#ACAEB0",
                      color:
                        formData[question.name] === value ? "white" : "#ACAEB0",
                    }}
                    key={index}
                  >
                    {value}
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
                    className={"w-full"}
                    style={{
                      ...styles.squareRadioButton,
                      backgroundColor:
                        formData[question.name] === option
                          ? "#003399"
                          : undefined,
                      borderColor:
                        formData[question.name] === option
                          ? "#003399"
                          : "#ACAEB0",
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
                    value={[option.name, option.value]}
                    style={{
                      ...styles.squircleRadioButton,
                      backgroundColor:
                        formData[question.name] &&
                        formData[question.name][0] === option.name &&
                        formData[question.name] &&
                        formData[question.name][1] === option.value
                          ? "#003399"
                          : undefined,
                      borderColor:
                        formData[question.name] &&
                        formData[question.name][0] === option.name &&
                        formData[question.name] &&
                        formData[question.name][1] === option.value
                          ? "#003399"
                          : "#ACAEB0",
                      color:
                        formData[question.name] &&
                        formData[question.name][0] === option.name &&
                        formData[question.name] &&
                        formData[question.name][1] === option.value
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
      let followUpQuestion = null;

      if (selectedOption) {
        const selectedValue = formData[question.name][1];
        const option = question.options.find((o) => o.value === selectedValue);
        followUpQuestion = option?.followUp;
      }
      return (
        <div key={question.id}>
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
                      value={[option.name, option.value]}
                      style={{
                        ...styles.squircleRadioButton,
                        backgroundColor:
                          formData[question.name] &&
                          formData[question.name][0] === option.name &&
                          formData[question.name] &&
                          formData[question.name][1] === option.value
                            ? "#003399"
                            : undefined,
                        borderColor:
                          formData[question.name] &&
                          formData[question.name][0] === option.name &&
                          formData[question.name] &&
                          formData[question.name][1] === option.value
                            ? "#003399"
                            : "#ACAEB0",
                        color:
                          formData[question.name] &&
                          formData[question.name][0] === option.name &&
                          formData[question.name] &&
                          formData[question.name][1] === option.value
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
                          value={[option.name, option.value]}
                          style={{
                            ...styles.squircleRadioButton,
                            backgroundColor:
                              formData[followUpQuestion.name] &&
                              formData[followUpQuestion.name][0] ===
                                option.name &&
                              formData[followUpQuestion.name] &&
                              formData[followUpQuestion.name][1] ===
                                option.value
                                ? "#003399"
                                : undefined,
                            borderColor:
                              formData[followUpQuestion.name] &&
                              formData[followUpQuestion.name][0] ===
                                option.name &&
                              formData[followUpQuestion.name] &&
                              formData[followUpQuestion.name][1] ===
                                option.value
                                ? "#003399"
                                : "#ACAEB0",
                            color:
                              formData[followUpQuestion.name] &&
                              formData[followUpQuestion.name][0] ===
                                option.name &&
                              formData[followUpQuestion.name] &&
                              formData[followUpQuestion.name][1] ===
                                option.value
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
                  {followUpQuestion.type === "dropdown" && (
                    <Select
                      value={formData[followUpQuestion.name] || ""}
                      defaultValue={""}
                      fullWidth
                      onChange={(e) =>
                        handleFormInputChange(
                          followUpQuestion.name,
                          e.target.value
                        )
                      }
                      sx={{
                        height: 40,
                      }}
                    >
                      {followUpQuestion.options.map((option, index) => (
                        <MenuItem value={option} key={index}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </>
              }
              info={followUpQuestion.info}
              key={followUpQuestion.id}
              style={opacityStyle}
            />
          )}
        </div>
      );
  }
};

export default renderQuestion;
