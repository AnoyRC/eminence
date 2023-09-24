import localFont from "next/font/local";
import Image from "next/image";

const myFont = localFont({ src: "../../public/fonts/Satoshi-Variable.woff2" });

export default function Balance({ symbol, balance, amount, type }) {
  return (
    <div
      className={
        "w-full h-[216px] rounded-[8px] flex flex-col justify-between py-[20px] px-[12px] " +
        myFont.className
      }
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(225deg, #49E9FF 0%, #40FF8D 100%)",
        boxShadow: "0px 0px 16px 4px rgba(255, 255, 255, 0.25)",
      }}
    >
      <div className="flex w-full items-center justify-between">
        <h1 className="text-black font-bold text-[14px]">You {type}</h1>
        <div className="flex flex-col items-center gap-[4px]">
          <Image
            src={`/images/Dashboard/AsideContainer/${symbol}.svg`}
            width={20}
            height={20}
            alt="Coin"
          />
          <h1 className="text-black font-bold text-[12px]">
            {symbol === "USDC" ? "USD Coin" : "Solana"}
          </h1>
        </div>
      </div>

      <h1 className="font-bold text-black text-[48px]">
        {Math.trunc(amount)}
        {amount % Math.trunc(amount) !== 0 && "."}
        <span className="text-[24px]">
          {Math.trunc(amount) !== 0 && amount.toString().split(".")[1]}
        </span>
      </h1>

      <div className="flex flex-col w-full gap-[8px]">
        <hr className="border-dotted border-[1px] border-black"></hr>
        <div className="flex justify-between items-center w-full px-[8px] text-[14px] font-bold text-black">
          <h1>Balance</h1>
          <h1>
            {Math.trunc(balance)}
            {balance % Math.trunc(balance) !== 0 && "."}
            <span className="text-[10px]">
              {balance % Math.trunc(balance) !== 0 &&
                balance.toString().split(".")[1]}
            </span>{" "}
            {symbol}
          </h1>
        </div>
      </div>
    </div>
  );
}
