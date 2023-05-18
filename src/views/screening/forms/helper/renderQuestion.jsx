import {
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
} from "@mui/material";
import { QuestionField } from "../../../../shared/components/form/screening";

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
  steps,
  formData,
  currentStepIndex,
  handleFormInputChange,
  step,
  schools
) => {
  if (!question) {
    return null;
  }

  const isQuestionUnanswered = typeof formData[question.name] === "undefined";

  const isPreviousQuestionUnanswered =
    step.questions.length > 1
      ? index > 0 &&
        typeof formData[step.questions[index - 1].name] === "undefined"
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
              {schools.map((school, index) => (
                <MenuItem value={school.id} key={index}>
                  {school.name}
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
                        formData[question.name] === age ? "#003399" : undefined,
                      borderColor:
                        formData[question.name] === age ? "#003399" : "#ACAEB0",
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
                            formData[followUpQuestion.name][0] === option.name &&
                            formData[followUpQuestion.name] &&
                            formData[followUpQuestion.name][1] === option.value
                              ? "#003399"
                              : undefined,
                          borderColor:
                            formData[followUpQuestion.name] &&
                            formData[followUpQuestion.name][0] === option.name &&
                            formData[followUpQuestion.name] &&
                            formData[followUpQuestion.name][1] === option.value
                              ? "#003399"
                              : "#ACAEB0",
                          color:
                            formData[followUpQuestion.name] &&
                            formData[followUpQuestion.name][0] === option.name &&
                            formData[followUpQuestion.name] &&
                            formData[followUpQuestion.name][1] === option.value
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
                        handleFormInputChange(followUpQuestion.name, e.target.value)
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
        </>
      );
  }
};

export default renderQuestion;
