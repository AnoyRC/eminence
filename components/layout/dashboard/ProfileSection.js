"use client";
import useToast from "@/hooks/useToast";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import Avatar, { genConfig } from "react-nice-avatar";

export default function ProfileSection() {
  const pubKey = "FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM";
  const { Info } = useToast();
  return (
    <div className="w-full flex flex-col items-center gap-[20px]">
      <hr className="w-[80%] border-[#f0f0f0] border-opacity-50" />
      <div className="flex w-[80%]">
        <div className="h-[50px] w-[50px] rounded-full border-[2px] flex items-center justify-center border-[#26FFFF]">
          <Avatar
            style={{ width: "40px", height: "40px" }}
            {...genConfig("smkmskmd")}
            className=""
          />
        </div>
        <div className="flex flex-col justify-center ml-[20px]">
          <h1 className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]">
            Gautam Raj
          </h1>
          <button
            className="text-[#f0f0f099] flex flex-start items-center text-[12px] hover:cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(pubKey);
              Info("Copied to clipboard");
            }}
          >
            {pubKey.substring(0, 4) +
              "..." +
              pubKey.substring(pubKey.length - 4, pubKey.length)}
            <DocumentDuplicateIcon className="w-[13px] h-[13px] ml-[4px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
