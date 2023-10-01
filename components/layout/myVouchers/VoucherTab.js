import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function VoucherTab({ voucherId, amount }) {
  return (
    <div className="flex w-full rounded-[8px] px-[8px] py-[12px] bg-[#1C1D22]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[12px]">
          <div
            className="flex justify-center items-center p-[8px] rounded-full w-[39px]"
            style={{
              background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
            }}
          >
            <Image
              src="/images/myVouchers/Voucher.svg"
              width={16}
              height={16}
              alt="icon"
            />
          </div>

          <div className="flex flex-col justify-center ">
            <h1 className="text-white text-[14px]">{voucherId}</h1>
            <h1 className=" font-bold text-transparent text-[12px] bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]">
              {amount} Sol
            </h1>
          </div>
        </div>
        <DocumentDuplicateIcon className="w-[20px] h-[20px] text-[#F0F0F0] opacity-60 mr-2" />
      </div>
    </div>
  );
}
