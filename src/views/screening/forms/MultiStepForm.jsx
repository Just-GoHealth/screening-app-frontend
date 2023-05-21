import React, { useEffect, useState } from "react";
import useMultiStepHook from "../../../shared/custom-hooks/useMultiStepForm";
import { FormNavigation } from "../../../shared/components/form/screening";
import renderQuestion from "./helper/renderQuestion";

const MultiStepForm = ({
  selectedSection,
  selectedSubSection,
  handleSelectedSection,
  formData,
  setFormData,
  handleGetRecommendations,
  subSectionsArr,
  showQuestions,
  data,
  schools,
}) => {
  //defining states for component
  const [isStepComplete, setIsStepComplete] = useState(false);
  const [currentSection, setCurrentSection] = useState(
    data.data.find((data) => data.id === selectedSection)
  );

  const [canSubmit, setCanSubmit] = useState(false);

  //Pass subsections as steps
  const {
    steps,
    step,
    currentStepIndex,
    setCurrentStepIndex,
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepHook(subSectionsArr);

  useEffect(() => {
    console.log("schoools ", schools);
  }, []);

  //set the step to the first step whenever the selected section changes
  useEffect(() => {
    setCurrentStepIndex(0);
  }, [selectedSection]);

  //check if all the fields of the current step are filled, and then set the isStepComplete accordingly
  useEffect(() => {
    const currentStep = steps[currentStepIndex]; //get the current step
    const isCurrentStepComplete = currentStep.questions.every(isQuestionFilled); // check if the current step questions have their fields filled
    setIsStepComplete(isCurrentStepComplete);

    const areAllStepsComplete = steps.map((step) => step.questions.every(isQuestionFilled)).every(Boolean) // check if all questions have their fields filled
    setCanSubmit(areAllStepsComplete)
    
  }, [formData, selectedSection, selectedSubSection, step]);

  //change the selectedsubsection or step accordingly once the step changes
  useEffect(() => {
    const newSection = data.data.find((section) =>
      section.subSections.some((subSection) => subSection.id === step.id)
    );
    handleSelectedSection(newSection.id, step.id);
  }, [step]);

  //change the currentstepindex whenver the selected section and selected subsection changes
  useEffect(() => {
    setCurrentSection(data.data.find((data) => data.id === selectedSection));
    const currentStep = steps.find((step) => step.id === selectedSubSection);
    setCurrentStepIndex(steps.indexOf(currentStep));
  }, [selectedSection, selectedSubSection]);

  //logic to check if a question has it's field filled
  const isQuestionFilled = (question) => {
    const fieldValue = formData[question.name];
      if (typeof fieldValue === "undefined") {
        return false;
      } else if (typeof fieldValue == "string") {
        if (fieldValue === "") {
          return false;
        }
        return true;
      } else if (fieldValue === null) {
        return false;
      } else {
        return true;
      }
  }

  //handle input change of form
  const handleFormInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  //handle submit of form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!showQuestions) {
      alert(
        "Questions are not yet available for the selected grade. Try again later!"
      );
      return;
    }

    if (!canSubmit) {
      return;
    }
    if (formData.grade && formData.grade >= "7") {
      const transformedData = {
        full_name: formData?.fullName,
        age: formData?.age,
        gender: formData?.gender === "M" ? "Male" : "Female",
        location: formData?.location,
        grade: formData?.grade,
        parent_name: formData?.parentName,
        parent_mobile: formData?.parentContact,
        screenedBy: formData?.screenedBy,
        school_name: formData?.school,
        signs_and_symptoms: {
          emotional_disorder: {
            feeling_sad_or_low: formData?.feelingSadOrLow,
            feeling_inadequate_or_useless: formData?.feelingInadequateOrUseless,
            excessive_worry: formData?.excessiveWorry,
            low_self_esteem: formData?.lowSelfEsteem,
          },
          behavioral_disorder: {
            aggressive_behavior: formData?.aggressiveBehavior,
            suspensions_punishments: formData?.suspensions,
          },
          suicidal_actions: {
            suicidal_thoughts: formData?.suicidalThoughts,
          },
          loss_of_interest: {
            social_withdrawal: formData?.socialWithdrawal,
            lack_of_motivation: formData?.motivationLoss,
          },
          difficulties_in_school: {
            concentration_issues: formData?.concentrationIssues,
            decline_in_grades: formData?.declineInGrades,
          },
          sleep_disturbance: {
            sleep_troubles: formData?.sleepTroubles,
            restful_sleep: formData?.restfulSleep,
          },
          unexplained_physical_symptoms: {
            new_physical_symptoms: formData?.newPhysicalSymptoms,
            specify_symptoms: formData?.physicalSymptoms,
            appetite_changes: formData?.appetiteChanges,
          },
        },
        triggers: {
          exposure_to_trauma: {
            traumatic_events: formData?.traumaticEvents,
            traumatic_related_thoughts: formData?.traumaThoughts,
          },
          academic_pressure: {
            academic_stress: formData?.academicStress,
          },
          dysfunctional_family: {
            family_conflict: formData?.familyConflict,
            family_situation: formData?.familySituation,
            living_situation_change: formData?.situationChange,
          },
          peer_pressure: {
            bullying: formData?.bullyingAndHarassment,
          },
          relationship_problems: {
            coping_with_heartbreak: formData?.copingWithHeartbreak,
            feeling_disconnected: formData?.feelingDisconnected,
          },
        },
        risk_factors: {
          health_problems: {
            chronic_illness: formData?.chronicIllness,
          },
          family_mental_health: {
            family_member_disorder: formData?.familyMemberDisorder,
          },
          socioeconomic_disadvantage: {
            financial_difficulties: formData?.financialDifficulties,
            opportunity_limitations: formData?.opportunityLimitations,
          },
          substance_abuse: {
            substance_use: formData?.substanceUse,
            substance_use_frequency: formData?.substanceUseFrequency,
            exposure_to_substance_abuse: formData?.substanceAbuseExposure,
          },
        },
        support_systems: {
          supportive_family_relationship: {
            family_communication: formData?.familyCommunication,
          },
          mental_health_awareness: {
            mental_health_education: formData?.mentalHealthEducation,
          },
          leisure_activities: {
            enjoyable_activities: formData?.enjoyableActivities,
          },
        },
      };
      console.log("Form submitted:", transformedData);
    }


    const index = data.data.indexOf(currentSection); //find the index of the currentSection

    if (index + 1 < data.data.length) {
      //if the index is less than the length of the data i.e if it is not the last index
      const nextSection = data.data[index + 1]; //get the next section i.e the next index
      handleSelectedSection(nextSection.id); //pass the next section's id into the handleselected section function
    } else {
      handleGetRecommendations();
    }
  };

  const handleNextStep = () => {
    if (!isStepComplete) return; //cross check to very the step is complete
    nextStep(); //move to the next step
  };

  return (
    <div className="px-5 pb-5 h-full pr-20">
      <h1 className="screening_heading">{currentSection.name}</h1>

      <form className="space-y-7 h-[500px] overflow-auto px-5">
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: currentStepIndex === index ? "block" : "none" }}
          >
            {step.questions.map((question, index) =>
              renderQuestion(
                question,
                index,
                steps,
                formData,
                currentStepIndex,
                handleFormInputChange,
                step,
                schools
              )
            )}
          </div>
        ))}
      </form>

      <FormNavigation
        user={formData?.fullName ?? ""}
        onPreviousPageClick={previousStep}
        onNextPageClick={handleNextStep}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        handleFormSubmit={handleFormSubmit}
        isStepComplete={isStepComplete}
        canSubmit={canSubmit}
      />
    </div>
  );
};

export default MultiStepForm;
