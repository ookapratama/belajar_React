import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    "Search a Mentor",
    "And Growth Together",
  ];

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 5) setStep((s) => s + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setOpen((open) => !open)}>
        &times;
      </button>

      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#385bc2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#385bc2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="message">We Are Closed Now!</p>
        </>
      )}
    </>
  );
};

export default App;
