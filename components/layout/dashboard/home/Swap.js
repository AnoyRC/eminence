"use client";
import Balance from "@/components/ui/Balance";
import GradientButton from "@/components/ui/GradientButton";
import Image from "next/image";
import { useState } from "react";

const Swap = () => {
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {
    if (e.target.value === "") setAmount(0);
    const regex = new RegExp("^[0-9]*[.]{0,1}[0-9]{0,2}$");
    if (regex.test(e.target.value)) setAmount(e.target.value);
  };

  return (
    <div className="flex flex-col justify-between pt-[28px] h-full px-[28px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex">
          <h1 className="text-white text-[16px] mr-1"> Swap by </h1>
          <Image
            src="/images/Dashboard/AsideContainer/Jupiter.svg"
            width={20}
            height={20}
            alt="Jupiter"
          />
          <h1 className="text-white text-[16px] ml-1"> Jupiter </h1>
        </div>

        <div className="flex flex-col gap-[20px] relative">
          <Balance
            symbol={"SOL"}
            type={"Send"}
            editable
            balance={254.12}
            value={amount}
            onChange={handleChange}
          />
          <Balance
            symbol={"USDC"}
            type={"Receive"}
            amount={124.64}
            balance={1370.12}
          />
          <div
            className="flex items-center justify-center h-[60px] w-[60px] rounded-full bg-[#1C1D22] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            style={{
              boxShadow: "0px 0px 12px 8px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src="/images/Dashboard/AsideContainer/Swap.svg"
              width={32}
              height={32}
              alt="Swap"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-[10px]">
        <div className="flex justify-between text-[14px]">
          <h1 className="font-bold">Rate</h1>
          <h1 className="font-bold text-white">1 SOL = 20 USDC</h1>
        </div>
        <GradientButton label={"Swap"} />
      </div>
    </div>
  );
};

export default Swap;
