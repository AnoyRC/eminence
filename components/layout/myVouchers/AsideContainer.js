"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import VoucherTab from "./VoucherTab";
import { useSelector } from "react-redux";
import useGetServer from "@/hooks/useGetServer";

export default function AsideContainer() {
  const vouchers = useSelector((state) => state.profile.vouchers);
  const mnemonics = useSelector((state) => state.wallet.mnemonics);

  const { fetchVouchers } = useGetServer();

  useEffect(() => {
    if (mnemonics) fetchVouchers();
  }, [mnemonics]);

  return (
    <aside className="py-[28px] w-[300px] h-full bg-black/40 flex flex-col px-[28px]">
      <div className="flex justify-center items-center text-white p-px rounded-full mb-7 bg-gradient-priamry">
        <div className="w-full h-full flex justify-center items-center rounded-full bg-black px-3 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-primary-white" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-base ml-3 w-full text-primary-white"
          />
        </div>
      </div>

      <h3 className="text-white text-[24px] font-bold mb-6">Vouchers</h3>

      <div className="flex flex-col gap-[12px] w-full">
        {vouchers &&
          vouchers.length > 0 &&
          vouchers.map((voucher) => (
            <VoucherTab
              key={voucher.voucherId}
              voucherId={voucher.voucherId}
              amount={voucher.amount}
            />
          ))}
      </div>
    </aside>
  );
}
