import Link from "next/link";
const phrase =
  "brand layer neglect rapid real quit milk ribbon large chat diesel carbon";

export default function FormData_1() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-[Satoshi-Bold] text-center text-black">
        Enter Your Secret Cipher
      </h1>
      <p className="text-[16px] font-[Satoshi-Regular] text-center text-[#1C1D22] mt-[18px]">
        Enter your secret security phrase to access your <br /> account securely
        and continue your crypto journey.
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
      <Link
        className="mt-[40px] bg-[#1C1D22] py-[12px] px-[60px]  text-[Satoshi-Bold] text-white text-center text-[16px] rounded-lg w-[320px]"
        href="/createPassword"
      >
        Confirm Security Phase
      </Link>
    </div>
  );
}
