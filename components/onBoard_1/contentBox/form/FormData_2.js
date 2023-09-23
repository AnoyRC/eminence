"use client";
import useOnboard from "@/hooks/useOnboard";
import FormButton from "./formData/FormButton";
import { useSelector } from "react-redux";

export default function FormData_2() {
  const { step2 } = useOnboard();
  const mnemonic = useSelector((state) => state.wallet.mnemonics);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Save Security Phase
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Security phrase are automatically generated as you <br /> start your
        journey. Simply save it securely. It's your key <br /> to protecting
        your assets.
      </p>
      <div className="mt-[40px] grid grid-cols-3 grid-rows-4 gap-[20px]">
        {mnemonic.split(" ").map((word, index) => (
          <div
            key={index}
            className="flex flex-start font-medium text-primary-black text-[16px] px-[12px] py-[10px] bg-[#f0f0f099] rounded-lg"
          >
            <div className="w-[100px]">{word}</div>
          </div>
        ))}
      </div>
      <FormButton
        className="mt-[40px]"
        text="Continue"
        onClick={step2.Continue}
      />
    </div>
  );
}
