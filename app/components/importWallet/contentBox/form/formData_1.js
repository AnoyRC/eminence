"use client";
import useCreateWallet from "@/hooks/useCreateWallet";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const phrase =
  "secret1 secret2 secret3 secret4 secret5 secret6 secret7 secret8 secret9 secret10 secret11 secret12";

export default function FormData_1() {
  const { importWallet } = useCreateWallet();
  const router = useRouter();
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
        Enter Your Secret Cipher
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Enter your secret security phrase to access your <br /> account securely
        and continue your crypto journey.
      </p>

      <div className="mt-[40px] grid grid-cols-3 grid-rows-4 gap-[20px]">
        {phrase.split(" ").map((word, index) => (
          <input
            key={index}
            className="flex flex-start w-[110px] text-black text-[16px] px-[12px] py-[10px] bg-[#f0f0f099] rounded-lg"
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

      <button
        className="mt-[40px] bg-primary-black py-[12px] px-[60px] text-primary-white text-center text-[16px] font-bold rounded-lg w-[320px]"
        onClick={() => {
          for (let i = 0; i < inputMnemonic.length; i++) {
            if (inputMnemonic[i] === "") {
              return;
            }
          }
          importWallet(inputMnemonic.join(" "));
          router.push("/password");
        }}
      >
        Confirm Security Phase
      </button>
    </div>
  );
}
