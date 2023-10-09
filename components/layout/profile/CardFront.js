"use client";
import Image from "next/image";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import Avatar, { genConfig } from "react-nice-avatar";
import QRCodeGenerator from "./CardQrCode";

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
      className={`${backgroundColor} relative overflow-hidden  w-[220px] h-[316px] shadow-md shadow-[#ffffff40] rounded-lg`}
    >
      <div className="absolute w-[450px] h-[450px] -top-[62px] -left-[40px] ">
        <Image
          src="/images/logo.png"
          width={377}
          height={377}
          className="w-full h-full"
          style={{ opacity: 0.5 }}
        />
      </div>

      <div className=" w-full h-full flex flex-row items-center gap-2">
        <div
          className={` ${eminenceColor}  font-bold text-[12px] rotate-180 `}
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
              className={`${textColor} h-[20px] w-[20px] `}
            />
          </button>

          {/* <Image
            src="/images/myVouchers/sampleQr.png"
            width={120}
            height={120}
            alt="QR"
          /> */}
          <QRCodeGenerator route={`http://localhost:3000`} />

          <div className="flex gap-[12px] items-center">
            <Avatar
              style={{ width: "2rem", height: "2rem" }}
              {...genConfig("sourabh")}
              className=""
            />

            <div className="flex flex-col justify-center">
              <h1 className={`${textColor} text-[14px] font-medium`}>
                Sourabh Singh
              </h1>
              <p
                className={`${accountNoColor} flex flex-start items-center text-[10px]`}
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
