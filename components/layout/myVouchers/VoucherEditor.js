"use client";

import { useEffect, useState } from "react";
import { Input, Textarea } from "@material-tailwind/react";

import Balance from "@/components/ui/Balance";
import { useSelector } from "react-redux";

export default function VoucherEditor({
  amount,
  message,
  password,
  voucherId,
  setAmount,
  setMessage,
  setPassword,
}) {
  const balance = useSelector((state) => state.profile.balance);

  return (
    <div className="w-full items-center rounded-[8px] p-[1px] bg-gradient-priamry">
      <div className="flex justify-between h-full w-full bg-black rounded-lg p-2 gap-3">
        <div className="w-2/5">
          <Balance
            symbol="SOL"
            balance={balance}
            value={amount}
            type="Send"
            editable
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="flex-grow px-5 flex flex-col gap-4">
          <p className="text-white font-bold text-xl">
            Voucher Id:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-priamry">
              {voucherId}
            </span>
          </p>

          <Input
            type="password"
            variant="standard"
            label="Password"
            color="white"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="relative">
            <Textarea
              label="Custom Message"
              variant="standard"
              className="border-white text-white"
              labelProps={{
                className:
                  " peer-placeholder-shown:text-white peer-disabled:peer-placeholder-shown:text-white peer-focus:text-white after:border-white peer-focus:after:!border-white",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={100}
            />

            <span className="absolute text-primary-white bottom-2 right-0 text-xs">
              {100 - message.length} letter Left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
