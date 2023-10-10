'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import VoucherTab from './VoucherTab';
import { useEffect, useState } from 'react';

export default function AsideContainer() {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      const res = await fetch('http://localhost:8080/api/voucher/get', {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('x-auth-token'),
          'x-auth-pubkey': localStorage.getItem('x-auth-pubkey'),
        },
      });
      const data = await res.json();

      setVouchers(data);
    };

    fetchVouchers();
  }, []);

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
        {vouchers.map((voucher) => (
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
