import React, { useState } from "react";

const messages = [
  "Learn React *",
  "Apply For the Job",
  "Invest the new income",
];
export default function App() {
  // State to manage the step
  const [step, setStep] = useState(1);
  const [isClose, setIsClose] = useState(false);

  // Handle Previous Button
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  // Handle Next Button
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsClose(!isClose)}>
        &times;
      </button>
      {isClose && ( // Corrected conditional rendering
        <div className="steps-container">
          {/* Step Numbers */}
          <div className="number-container">
            <div className={`step-number ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`step-number ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`step-number ${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          {/* Step Message */}
          <p className="step-message">  
            Step {step}: {messages[step - 1]}
          </p>

          {/* Buttons */}
          <div className="button-container">
            <button
              className="button"
              disabled={step === 1}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="button"
              disabled={step === 3}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
