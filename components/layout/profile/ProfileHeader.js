"use client";
import Avatar, { genConfig } from "react-nice-avatar";
import localFont from "next/font/local";
import {
  ArrowUturnRightIcon,
  DocumentDuplicateIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import useToast from "@/hooks/useToast";

const myFont = localFont({
  src: "../../../public/fonts/Satoshi-Variable.woff2",
});

export default function ProfileHandler() {
  const pubkey = "FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM";
  const { Success } = useToast();
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse w-full items-center justify-center">
        <div
          className="p-[1px] w-full  rounded-[8px] z-0 -mt-[84px]"
          style={{
            background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
          }}
        >
          <div
            className={
              "bg-black h-[180px] w-full rounded-[8px] flex flex-col items-center justify-center gap-[8px] relative " +
              myFont.className
            }
          >
            <ShareIcon className="h-[20px] w-[20px] absolute top-0 right-0 m-[20px] text-white opacity-60 hover:cursor-pointer mx-[16px]" />
            <h1 className="text-2xl font-bold text-center mt-[70px] text-transparent bg-gradient-to-r from-[#4aff93] to-[#26ffff] bg-clip-text">
              Anoy Roy Chowdhury
            </h1>
            <div
              className="rounded-full bg-[#1C1D22] text-white p-1 px-4 text-[12px] flex items-center justify-center hover:cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(pubkey);
                Success("Copied to clipboard");
              }}
            >
              <h1 className="opacity-60">
                {pubkey.substring(0, 4)}...
                {pubkey.substring(pubkey.length - 4, pubkey.length)}
              </h1>
              <DocumentDuplicateIcon className="h-[12px] w-[12px] inline-block ml-[5px] opacity-60" />
            </div>
          </div>
        </div>
        <div className="p-[1px] rounded-full relative bg-gradient-to-r from-[#4AFF93] to-[#26FFFF] z-10">
          <div className="absolute bottom-0 h-[50%] w-full right-0 bg-black rounded-b-full"></div>
          <div className="bg-black rounded-full p-[2px] relative ">
            <Avatar
              style={{ width: "10rem", height: "10rem" }}
              {...genConfig("John Doe")}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
