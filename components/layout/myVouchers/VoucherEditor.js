"use client";
import Balance from "@/components/ui/Balance";
import { Input, Textarea } from "@material-tailwind/react";

export default function VoucherEditor() {
  return (
    <div
      className="w-full items-center rounded-[8px] p-[1px]"
      style={{
        background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
      }}
    >
      <div className="flex justify-between h-full w-full bg-[#000000] rounded-[8px] p-[8px] py-[10px] gap-[12px]">
        <div className="w-[40%]">
          <Balance
            symbol="SOL"
            balance={100}
            value={100}
            type="Send"
            editable
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="flex-grow px-[20px] flex flex-col gap-[18px] ">
          <h1 className="text-white font-bold text-[20px]">
            Voucher Id:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]">
              256789801
            </span>
          </h1>
          <Input variant="standard" label="Password" color="white" />
          <Textarea
            label="Custom Message"
            variant="standard"
            className="border-white text-white"
            labelProps={{
              className:
                " peer-placeholder-shown:text-white peer-disabled:peer-placeholder-shown:text-white peer-focus:text-white after:border-white peer-focus:after:!border-white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
