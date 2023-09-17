import Step from "./stepView/Step";

const steps = [
  {
    id: 1,
    line1: "Craft Your",
    line2: "Digital Vault",
  },
  {
    id: 2,
    line1: "Reveal Your",
    line2: "Wallet's Core",
  },
  {
    id: 3,
    line1: "Verify Your",
    line2: "Secret Shield",
  },
  {
    id: 4,
    line1: "Set and Confirm",
    line2: "Your PassCode",
  },
  {
    id: 5,
    line1: "Your Security",
    line2: "and Privacy",
  },
];

export default function StepView() {
  return (
    <div className="flex justify-center items-center space-x-[32px]">
      {steps.map((step) => (
        <Step
          key={step.id}
          id={step.id}
          line1={step.line1}
          line2={step.line2}
        />
      ))}
    </div>
  );
}
