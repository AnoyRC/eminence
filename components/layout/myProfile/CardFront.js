"use client";
import Image from "next/image";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import Avatar, { genConfig } from "react-nice-avatar";

export default function CardFront({ toggleCard }) {
  return (
    <div className="relative overflow-hidden bg-primary-black w-[220px] h-[316px] shadow-md shadow-[#ffffff40] rounded-lg">
      <Image
        src="/images/logo.png"
        alt="Logo"
        layout="fill"
        objectFit="cover"
        style={{ opacity: 0.5 }}
      />
      <div className=" w-full h-full flex flex-row items-center gap-2">
        <div
          className=" text-primary-white font-bold text-[12px] rotate-180 "
          style={{ writingMode: "vertical-rl" }}
        >
          Eminence Wallet
        </div>
        <div className="w-[28px] h-full bg-[#6ccbb966] "></div>
        <div className=" w-full h-full flex flex-col justify-between items-end px-3 py-3">
          <button
            onClick={() => toggleCard()}
            className="hover:cursor-pointer z-20"
          >
            <ArrowPathRoundedSquareIcon className="text-white h-[20px] w-[20px] " />
          </button>

          <Image
            src="/images/myVouchers/sampleQr.png"
            width={120}
            height={120}
            alt="QR"
          />
          <div className="flex gap-[12px] items-center">
            <Avatar
              style={{ width: "2rem", height: "2rem" }}
              {...genConfig("sourabh")}
              className=""
            />

            <div className="flex flex-col justify-center">
              <h1 className="text-primary-white text-[14px] font-medium">
                Sourabh Singh
              </h1>
              <p className="text-[#f0f0f099] flex flex-start items-center text-[12px]">
                8421....0792
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}