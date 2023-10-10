"use client";

import Voucher from "@/components/layout/voucher/Voucher";
import VoucherReceive from "@/components/layout/voucher/VoucherReceive";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function VoucherId({ params }) {
  const [loading, setLoading] = useState(true);
  const [voucher, setVoucher] = useState({});

  useEffect(() => {
    const fetchVoucher = async () => {
      const res = await fetch(`${process.env.NEXT_URL}/api/voucher/get/696969`);
      const data = await res.json();
      setVoucher(data);

      console.log(data);
      setLoading(false);
    };
    fetchVoucher();
  }, []);

  return (
    <div className="w-screen h-screen bg-primary-black">
      {!loading ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <Image src="/loading.svg" width={200} height={200} />
        </div>
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
