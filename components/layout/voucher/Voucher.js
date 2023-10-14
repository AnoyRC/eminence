"use client";
import { useState, useEffect, use } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Avatar, { genConfig } from "react-nice-avatar";

import useToast from "@/hooks/useToast";

import QRCodeGenerator from "../profile/CardQrCode";
import { useSelector } from "react-redux";

export default function Voucher({ amount, message }) {
  const { Info } = useToast();
  const user = useSelector((state) => state.profile.user);

  return (
    <div
      className="w-full h-[400px] items-center rounded-[8px] p-[1px]"
      style={{
        background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
      }}
    >
      <div className="flex justify-between h-full w-full bg-[#000000] rounded-[8px]">
        <div className="flex">
          <Image
            src="/images/logo.png"
            width={146}
            height={146}
            alt="Logo"
            className="h-[146px] mt-2 ml-4"
          />
          <Image
            src="/images/myVouchers/Ribbon.svg"
            width={118}
            height={400}
            alt="Ribbon"
            className="-ml-3"
          />
        </div>

        <div className="flex flex-col justify-between items-center py-[16px] mr-2">
          <h3 className="text-[86px] text-white font-bold -mt-3">Voucher</h3>
          <p className="text-[14px] break-words	 text-white w-[220px]">
            {message}
          </p>
          <div className="flex w-full gap-[13px] mb-1">
            <p className="text-[28px] font-bold text-white ">Amount:</p>
            <div
              className="flex justify-center items-center py-[6px] px-[24px] rounded-full"
              style={{
                background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
              }}
            >
              <p className="text-lg text-black font-bold">{amount} Sol</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center py-[16px] mr-[28px]">
          {/* <Image
            src="/images/myVouchers/sampleQr.png"
            width={200}
            height={200}
            alt="QR"
          /> */}
          <QRCodeGenerator
            remainingRoute={`/vouchers/234`}
            height={200}
            width={200}
          />
          <div className="flex gap-[12px]">
            <div className="h-[70px] w-[70px] rounded-full border-[2px] flex items-center justify-center border-[#26FFFF]">
              <Avatar
                style={{ width: "62px", height: "62px" }}
                {...genConfig("smkmskmd")}
                className=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className=" font-bold text-transparent text-[24px] bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]">
                {user?.firstName + " " + user?.lastName}
              </h4>
              <button
                className="text-[#f0f0f099] flex flex-start items-center text-[16px] hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(pubKey);
                  Info("Copied to clipboard");
                }}
              >
                {user &&
                  user.pubkey &&
                  user.pubkey.substring(0, 4) +
                    "..." +
                    user.pubkey.substring(
                      user.pubkey.length - 4,
                      user.pubkey.length
                    )}
                <DocumentDuplicateIcon className="w-[11px] h-[11px] ml-[4px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
