import Link from "next/link";
import FormButton from "./formData/FormButton";
import useOnboard from "@/app/hooks/useOnboard";

const phrase =
  "Secret1 Secret2 Secret3 Secret4 Secret5 Secret6 Secret7 Secret8 Secret9 Secret10 Secret11 Secret12";

export default function FormData_3() {
  const { step3 } = useOnboard();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Confirm Security Phrase
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Please re-enter the security phrase provided by <br /> Eminence. This
        step confirms that the phrase you've <br />
        aved matches.
      </p>
      <div className="mt-[40px] grid grid-cols-3 grid-rows-4 gap-[20px]">
        {phrase.split(" ").map((word, index) => (
          <input
            key={index}
            className="flex flex-start font-medium text-black text-[16px] px-[12px] py-[10px] bg-[#f0f0f099] rounded-lg"
            placeholder={word}
          ></input>
        ))}
      </div>
      <FormButton
        className="mt-[40px]"
        text="Confirm Security Phrase"
        onClick={step3.ConfirmPhrase}
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
