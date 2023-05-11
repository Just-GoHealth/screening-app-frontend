import React, { useState } from 'react'

const useMultiStepHook = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function nextStep() {
    console.log('next step')
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i

      return i + 1
    })
  }

  function previousStep() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i

      return i - 1
    })
  }

  return {
    steps,
    currentStepIndex,
    setCurrentStepIndex,
    step: steps[currentStepIndex],
    nextStep,
    previousStep,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
  }
}

export default useMultiStepHook