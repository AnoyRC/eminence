import useOnboard from "@/app/hooks/useOnboard";
import FormButton from "./formData/FormButton";

const phrase =
  "brand layer neglect rapid real quit milk ribbon large chat diesel carbon";

export default function FormData_2() {
  const { step2 } = useOnboard();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-[Satoshi-Bold] text-center text-black">
        Save Security Phase
      </h1>
      <p className="text-[16px] font-[Satoshi-Regular] text-center text-[#1C1D22] mt-[18px]">
        Security phrase are automatically generated as you <br /> start your
        journey. Simply save it securely. It's your key <br /> to protecting
        your assets.
      </p>
      <div className="mt-[40px] grid grid-cols-3 grid-rows-4 gap-[20px]">
        {phrase.split(" ").map((word, index) => (
          <div
            key={index}
            className="flex flex-start font-[Satoshi-Regular] text-black text-[16px] px-[12px] py-[10px] bg-[#f0f0f099] rounded-lg"
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
