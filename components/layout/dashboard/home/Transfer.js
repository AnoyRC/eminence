"use client";
import Balance from "@/components/ui/Balance";
import GradientButton from "@/components/ui/GradientButton";
import useTransfer from "@/hooks/useTransfer";
import {
  Select,
  Option,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const Transfer = () => {
  const [currency, setCurrency] = useState("SOL");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("0.0");
  const balance = useSelector((state) => state.profile.balance);
  const balanceUSDC = useSelector((state) => state.profile.balanceUSDC);
  const { transfer, transferToken } = useTransfer();

  const handleTransfer = async () => {
    if (currency === "SOL") {
      const result = await transfer(amount, recipient);
      if (result) setAmount("0.0");
    } else {
      const result = await transferToken(amount, recipient);
      if (result) setAmount("0.0");
    }
  };

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
          value={currency}
          onChange={(e) => setCurrency(e)}
        >
          <Option value="SOL">SOL</Option>
          <Option value="USDC">USDC</Option>
        </Select>

        <Input
          type="text"
          color="white"
          label="Recipient's Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <Input
          type="text"
          color="white"
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Balance
          symbol={currency}
          type={"Send"}
          amount={amount}
          balance={currency === "SOL" ? balance : balanceUSDC}
        />
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
        <GradientButton label={"Transfer"} onClick={handleTransfer} />
      </div>
    </div>
  );
};

export default Transfer;
