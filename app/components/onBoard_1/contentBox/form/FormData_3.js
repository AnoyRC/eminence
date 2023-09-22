import Link from "next/link";
import FormButton from "./formData/FormButton";
import useOnboard from "@/hooks/useOnboard";
import { useState } from "react";

const phrase =
  "Secret1 Secret2 Secret3 Secret4 Secret5 Secret6 Secret7 Secret8 Secret9 Secret10 Secret11 Secret12";

export default function FormData_3() {
  const { step3 } = useOnboard();
  const [inputMnemonic, setInputMnemonic] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Confirm Security Phrase
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Please re-enter the security phrase provided by <br /> Eminence. This
        step confirms that the phrase you've <br />
        saved matches.
      </p>
      <div className="mt-[40px] grid grid-cols-3 grid-rows-4 gap-[20px]">
        {phrase.split(" ").map((word, index) => (
          <input
            key={index}
            className="flex flex-start w-[110px] font-medium text-black text-[16px] px-[12px] py-[10px] bg-[#f0f0f099] rounded-lg"
            placeholder={word}
            onChange={(e) => {
              const newInputMnemonic = [...inputMnemonic];
              newInputMnemonic[index] = e.target.value.trim();
              setInputMnemonic(newInputMnemonic);
            }}
            disabled={
              index > 0 && inputMnemonic[index - 1] === "" ? true : false
            }
          ></input>
        ))}
      </div>
      <FormButton
        className="mt-[40px]"
        text="Confirm Security Phrase"
        onClick={() => {
          for (let i = 0; i < inputMnemonic.length; i++) {
            if (inputMnemonic[i] === "") {
              return;
            }
          }
          console.log(inputMnemonic.join(" "));
          step3.ConfirmPhrase(inputMnemonic.join(" "));
        }}
      />
      <h1 className="font-regular text-primary-black text-[12px] mt-[6px]">
        Forgot Security Phase?{" "}
        <Link
          className="underline underline-offset-4"
          href=""
          onClick={step3.Regenerate}
        >
          Generate New
        </Link>
      </h1>
    </div>
  );
}
