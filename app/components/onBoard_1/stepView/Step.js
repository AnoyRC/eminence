"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Step(props) {
  const currentStep = useSelector((state) => state.default.currentStep);
  return (
    <div className="flex flex-col items-center w-[120px]">
      <div
        className=" p-[6px] rounded-full"
        style={{
          backgroundColor: currentStep === props.id ? "#6CCBB9" : "#6CCBB999",
        }}
      >
        <Image
          src={`/images/OnBoard_1/StepView/Step${props.id}.svg`}
          width={20}
          height={20}
          alt="step"
        />
      </div>
      <h1 className="font-[Satoshi-Bold] mt-[8px] text-[14px] ">
        Step {props.id}
      </h1>
      <h1 className="font-[Satoshi-Regular] mt-[2px] text-[14px] text-center ">
        {props.line1} <br />
        {props.line2}
      </h1>
    </div>
  );
}
