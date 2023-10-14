"use client";

import { useEffect, useState } from "react";

import LoadingAnimation from "@/components/LoadingAnimation";
// import Voucher from "@/components/layout/myVouchers/Voucher";
import Voucher from "@/components/layout/voucher/Voucher";

export default function VoucherId({ params }) {
  const [loading, setLoading] = useState(true);
  const [voucher, setVoucher] = useState({});
  console.log();

  useEffect(() => {
    const fetchVoucher = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/voucher/get/${params.voucherId}`
      );
      const data = await res.json();
      setVoucher(data);

      setLoading(false);
    };
    fetchVoucher();
  }, []);

  return (
    <div className="w-screen h-screen bg-primary-black">
      {/* {loading ? (
        <LoadingAnimation />
      ) : ( */}
      <div className=" flex flex-col max-w-5xl gap-5 mx-auto h-full justify-center -translate-y-8">
        <Voucher
          amount={voucher.amount}
          message={voucher.message}
          pubKey={voucher.pubkey}
        />
      </div>
      {/* )} */}
    </div>
  );
}
