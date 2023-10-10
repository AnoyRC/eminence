"use client";
import Image from "next/image";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import Avatar, { genConfig } from "react-nice-avatar";
import QRCodeGenerator from "../CardQrCode";

export default function CardFront({ toggleCard, design }) {
  const backgroundColor =
    design === "white" ? "bg-primary-white" : "bg-primary-black";
  const textColor =
    design === "white" ? "text-primary-black" : "text-primary-white";
  const accountNoColor =
    design === "white" ? "text-[#1c1d22cc]" : "text-[#CCC]";
  const eminenceColor =
    design === "white" ? "text-[#1c1d22cc]" : "text-[#ffffffcc]";
  return (
    <div
      className={`${backgroundColor} relative overflow-hidden  w-[320px] h-[436px] shadow-md shadow-[#ffffff40] rounded-2xl`}
    >
      <div className="absolute w-[600px] h-[600px] -top-[62px] -left-[18px] ">
        <Image
          src="/images/logo.png"
          width={377}
          height={377}
          className="w-full h-full"
          style={{ opacity: 0.5 }}
        />
      </div>

      <div className=" w-full h-full flex flex-row items-center gap-5">
        <div
          className={` ${eminenceColor}  font-bold text-[18px] rotate-180 pr-2 `}
          style={{
            writingMode: "vertical-rl",
          }}
        >
          Eminence Wallet
        </div>
        <div className="w-[28px] h-full bg-[#6ccbb966] "></div>
        <div className=" w-full h-full flex flex-col justify-between items-end px-3 py-3">
          <button
            onClick={() => toggleCard()}
            className="hover:cursor-pointer z-20"
          >
            <ArrowPathRoundedSquareIcon
              className={`${textColor} h-[25px] w-[25px] `}
            />
          </button>

          <QRCodeGenerator
            remainingRoute={`/profile/234`}
            height={150}
            width={150}
          />

          <div className="flex gap-[12px] items-center">
            <Avatar
              style={{ width: "55px", height: "55px" }}
              {...genConfig("sourabh")}
              className=""
            />

            <div className="flex flex-col justify-center">
              <h1 className={`${textColor} text-[18px] font-bold`}>
                Sourabh Singh
              </h1>
              <p
                className={`${accountNoColor} flex flex-start items-center text-[13px]`}
              >
                8421....0792
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
