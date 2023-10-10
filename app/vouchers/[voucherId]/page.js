"use client";

import LoadingAnimation from "@/components/LoadingAnimation";
import Voucher from "@/components/layout/myVouchers/Voucher";
import VoucherReceive from "@/components/layout/voucher/VoucherReceive";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VoucherId({ params }) {
  const [loading, setLoading] = useState(true);
  const [voucher, setVoucher] = useState({});
  console.log();

  useEffect(() => {
    const fetchVoucher = async () => {
      const res = await fetch(
        `http://localhost:8080/api/voucher/get/${params.voucherId}`
      );
      const data = await res.json();
      setVoucher(data);

      console.log(data);
      setLoading(false);
    };
    fetchVoucher();
  }, []);

  return (
    <div className="w-screen h-screen bg-primary-black">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className=" flex flex-col max-w-5xl gap-5 mx-auto h-full justify-center -translate-y-8">
          <Voucher data={voucher} />

          {/* <VoucherReceive
            currency="SOL"
            balance={100}
            value={100}
            id={params.voucherId}
            message="Hello World"
          /> */}
        </div>
      )}
    </div>
  );
}
