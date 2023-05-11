import {
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { QuestionField } from "../../../shared/components/form/screening";
import React, { useEffect } from "react";

export default function FormatQuestionByType({ questions }) {
  useEffect(() => console.log(questions), []);
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
  questions.map((question) => {
    switch (question.type) {
      case "input":
        console.log('input')
        return (
          <QuestionField
            title={question.title}
            subtitle={question.subTitle}
            control={
              <>
                <TextField size="small" fullWidth />
              </>
            }
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
          />
        );
    }
  });
}
