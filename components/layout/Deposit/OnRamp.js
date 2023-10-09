"use client";
import { Button, Option, Select } from "@material-tailwind/react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/fonts/Satoshi-Variable.woff2",
});

const currency = [
  {
    name: "Indian Rupees",
    symbol: "INR",
    image: "/images/Deposit/ind.svg",
  },
  {
    name: "Mexican Peso",
    symbol: "MXN",
    image: "/images/Deposit/mexico.svg",
  },
  {
    name: "Nigerian Naira",
    symbol: "NGN",
    image: "/images/Deposit/Nigeria.svg",
  },
  {
    name: "Turkish Lira",
    symbol: "TRY",
    image: "/images/Deposit/Turkey.svg",
  },
  {
    name: "UAE Dirham",
    symbol: "AED",
    image: "/images/Deposit/uae.svg",
  },
  {
    name: "Vietnamese Dong",
    symbol: "VND",
    image: "/images/Deposit/Viet.svg",
  },
];

const cryptoCurrency = [
  {
    name: "Solana",
    symbol: "SOL",
    image: "/images/Dashboard/AsideContainer/SOL.svg",
  },
  {
    name: "USDC",
    symbol: "USDC",
    image: "/images/Dashboard/AsideContainer/USDC.svg",
  },
];

export default function OnRamp() {
  return (
    <div
      className="w-full rounded-[8px] p-[0.5px]"
      style={{
        background: "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
      }}
    >
      <div className=" h-full w-full flex flex-col gap-[20px] bg-black rounded-[8px] p-5">
        <div
          className="flex flex-row items-center p-4 pr-1 gap-[5px] w-fit rounded-[8px] "
          style={{
            background:
              "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
          }}
        >
          <h1 className="text-black">Powered by</h1>
          <Image
            src="/images/Deposit/OnRampLogo.svg"
            width={100}
            height={30}
            alt="OnRamp Logo"
          ></Image>
        </div>

        <h1 className="text-white text-2xl">Enter Amount</h1>

        <div
          className="flex items-center w-full rounded-[8px] h-[65px]"
          style={{
            background:
              "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
          }}
        >
          <input
            className="w-full h-full bg-transparent text-black text-3xl p-2 font-bold placeholder:text-black outline-none"
            type="text"
            placeholder="0.0"
          ></input>

          <vr className="h-[40px] w-[3px] bg-black"></vr>

          <Select
            size="regular"
            className="border-transparent h-full text-black w-[200px]"
            labelProps={{
              className:
                "after:border-transparent before:border-transparent w-[200px]",
            }}
            containerProps={{
              className: "min-w-[0px] w-[55%]",
            }}
          >
            {currency.map((item) => (
              <Option value={item.symbol} key={item.symbol}>
                <div
                  className={"flex items-center gap-[10px] " + myFont.className}
                >
                  <Image
                    src={item.image}
                    width={35}
                    height={35}
                    alt="INR Logo"
                  ></Image>
                  <div className="flex flex-col gap-[3px] justify-center h-full">
                    <h1 className="text-black font-bold">{item.name}</h1>
                    <h1 className="text-black text-sm">{item.symbol}</h1>
                  </div>
                </div>
              </Option>
            ))}
          </Select>
        </div>

        <h1 className="text-white text-2xl">You Will Receive (Approx.)</h1>

        <div
          className="flex items-center w-full rounded-[8px] h-[65px]"
          style={{
            background:
              "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
          }}
        >
          <h1 className="w-full bg-transparent text-black text-3xl p-2 font-bold placeholder:text-black outline-none">
            56.67
          </h1>

          <vr className="h-[40px] w-[3px] bg-black"></vr>

          <Select
            size="regular"
            className="border-transparent h-full text-black"
            labelProps={{
              className: "after:border-transparent before:border-transparent",
            }}
            containerProps={{
              className: "min-w-[0px] w-[55%]",
            }}
          >
            {cryptoCurrency.map((item) => (
              <Option value={item.symbol} key={item.symbol}>
                <div
                  className={"flex items-center gap-[10px] " + myFont.className}
                >
                  <Image
                    src={item.image}
                    width={35}
                    height={35}
                    alt="INR Logo"
                  ></Image>
                  <div className="flex flex-col gap-[3px] justify-center h-full">
                    <h1 className="text-black font-bold">{item.name}</h1>
                    <h1 className="text-black text-sm">{item.symbol}</h1>
                  </div>
                </div>
              </Option>
            ))}
          </Select>
        </div>

        <Button
          className={
            "bg-white flex items-center justify-center text-white text-2xl w-full h-[65px] rounded-[8px] font-normal mt-3 " +
            myFont.className
          }
          style={{
            textTransform: "none",
          }}
        >
          <div className="flex flex-row items-center p-4 pr-1 gap-[5px] w-fit rounded-[8px] ">
            <h1 className="text-black">Proceed with</h1>
            <Image
              src="/images/Deposit/OnRampLogo.svg"
              width={100}
              height={30}
              alt="OnRamp Logo"
            ></Image>
          </div>
        </Button>
      </div>
    </div>
  );
}
