"use client";
import { useSelector } from "react-redux";

export default function DynamicHeader() {
  const currentStep = useSelector((state) => state.default.currentStep);
  const headers = [
    "Embark on Your Crypto Journey",
    "Unleash Fort Knox",
    "Guardian of Your Future",
    "Forge a Key to Unlock your Digital Vault",
    "Decode Your Queries: Unveiling Eminence’s Answers",
  ];

  return (
    <h1 className="text-center font-[Satoshi-Bold] text-[48px]">
      {headers[currentStep - 1]}
    </h1>
  );
}
