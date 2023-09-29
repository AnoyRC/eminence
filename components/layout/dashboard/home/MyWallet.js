"use client";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const MyWallet = () => {
  const [active, setActive] = useState(false);
  const solValue = "71.27";
  const usdcValue = "36.50";
  const changeValue = "+08.14";

  const handleClick = () => {
    setActive(!active);
  };
  const displayValue = active ? usdcValue : solValue;
  const [integerPart, decimalPart] = displayValue.split(".");
  const [changeValueIntegerPart, changeValueDecimalPart] =
    changeValue.split(".");

  return (
    <div className="w-full h-screen relative bg-primary-white flex items-center justify-center flex-col">
      <div className="flex  flex-col w-[310px]  bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]  rounded-lg">
        <div className="flex justify-evenly m-[20px]">
          <h1 className="font-bold text-[14px] mr-[34px] mt-[5px]">
            My Wallet
          </h1>
          <div className="flex items-center w-[168px] h-[32px] bg-primary-black rounded-full">
            <div
              className={`flex justify-center w-[80px] h-[24px] ${
                active
                  ? "bg-primary-black"
                  : "bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]"
              } rounded-full ml-2`}
              onClick={handleClick}
            >
              <h1
                className={`font-bold text-[12px] flex items-center ${
                  active ? "text-white" : "text-black"
                }`}
              >
                Sol
              </h1>
            </div>
            <div
              className={`flex justify-center w-[80px] h-[24px] ${
                !active
                  ? "bg-black"
                  : "bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]"
              } rounded-full mr-2`}
              onClick={handleClick}
            >
              <h1
                className={`font-bold text-[12px] flex items-center ${
                  !active ? "text-white" : "text-black"
                }`}
              >
                USDC
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-[48px] font-bold text-primary-black">
            <span className="text-[48px] font-bold">{integerPart}</span>
            <span className="text-[32px] font-bold">{`.${decimalPart}`}</span>
            <span>{active ? " USDC" : " SOL"}</span>
          </h1>
          <p className="text-[14px] font-bold">
            <span>{`${changeValueIntegerPart}`}</span>
            <span className="text-[10px]">{`.${changeValueDecimalPart}`}</span>

            <span className="tex-[12px] font-medium ml-[4px]">Last Week</span>
          </p>
          <div className="mb-[20px]">
            <Button
              className="mt-[40px] bg-primary-black py-[8px] px-[112px] flex flex-row  text-primary-white text-center text-[14px] font-bold rounded-full "
              href=""
            >
              Buy
              <span>
                <ArrowUpRightIcon className="h-4 w-4 ml-2 text-primary-white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
