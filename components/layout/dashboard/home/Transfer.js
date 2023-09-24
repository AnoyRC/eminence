"use client";
import Balance from "@/components/ui/Balance";
import GradientButton from "@/components/ui/GradientButton";
import {
  Select,
  Option,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

const Transfer = () => {
  return (
    <div className="flex flex-col justify-between pt-[28px] h-full px-[28px]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-white text-[16px]"> Transfer SOL / USDC</h1>
        <Select
          label="Select Currency"
          className="text-white"
          color="teal"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <Option>SOL</Option>
          <Option>USDC</Option>
        </Select>

        <Input type="text" color="white" label="Recipient's Address" />
        <Input type="text" color="white" label="Amount" />

        <Balance symbol={"SOL"} type={"Send"} amount={71.64} balance={254.12} />
      </div>

      <div className="flex flex-col w-full gap-[10px]">
        <div className="flex items-center -ml-2">
          <Checkbox color="teal" className="" />
          <h1 className="text-white text-[16px] ml-1 mr-2">
            Pay Anonymously with{" "}
          </h1>
          <Image
            src="/images/Dashboard/AsideContainer/Elusiv.svg"
            width={20}
            height={20}
            alt="Elusiv"
          />
        </div>
        <GradientButton label={"Transfer"} />
      </div>
    </div>
  );
};

export default Transfer;
