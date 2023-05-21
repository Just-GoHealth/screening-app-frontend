import React from "react";
import { Button, IconButton } from "@mui/material";
import { AiOutlineLeft } from "react-icons/ai";

const styles = {
  nextButton: {
    backgroundColor: "#DAE7F6",
    color: "#9FB9E0",
    border: "2px solid #92AEDB",
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
};

export const FormNavigation = ({
  onPreviousPageClick,
  onNextPageClick,
  user,
  handleFormSubmit,
  isLastStep,
  isFirstStep,
  isStepComplete,
  canSubmit,
}) => {
  return (
    <nav className="flex items-center justify-between mt-5 ">
      <>
        {!isFirstStep && (
          <IconButton
            onClick={onPreviousPageClick}
            size="small"
            style={{ background: "#BCBEC0" }}
          >
            <AiOutlineLeft color="white" />
          </IconButton>
        )}
      </>

      <h2 className="health-records-nav-heading text-[#F1ADB0]">{user}</h2>

      <>
        {!isLastStep ? (
          <Button
            sx={{
              ...styles.nextButton,
              opacity: isStepComplete ? 1 : 0.3,
              pointerEvents: isStepComplete ? "" : "none",
            }}
            disableElevation
            onClick={isLastStep ? handleFormSubmit : onNextPageClick}
          >
            Next {">"}
          </Button>
        ) : (
          <Button
            sx={{
              ...styles.nextButton,
              opacity: canSubmit ? 1 : 0.3,
              pointerEvents: canSubmit ? "" : "none",
            }}
            disableElevation
            onClick={isLastStep ? handleFormSubmit : onNextPageClick}
          >
            Submit {">"}
          </Button>
        )}
      </>
    </nav>
  );
};
