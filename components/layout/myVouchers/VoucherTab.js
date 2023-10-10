'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  DocumentDuplicateIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import useToast from '@/hooks/useToast';

export default function VoucherTab({ voucherId, amount }) {
  const { Success } = useToast();
  const router = useRouter();

  const handleVoucherClick = () => {
    router.push(`/vouchers/${voucherId}`);
  };

  const handleCopy = (e) => {
    e.stopPropagation();

    navigator.clipboard.writeText(
      `http://localhost:3000/vouchers/${voucherId}`
    );

    Success('Copied to clipboard');
  };

  return (
    <button
      className="flex w-full rounded-[8px] px-[8px] py-[12px] bg-[#1C1D22] hover:scale-105 hover:opacity-80"
      onClick={handleVoucherClick}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[12px]">
          <div
            className="flex justify-center items-center p-[8px] rounded-full w-[39px]"
            style={{
              background: 'linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)',
            }}
          >
            <Image
              src="/images/myVouchers/Voucher.svg"
              width={16}
              height={16}
              alt="icon"
            />
          </div>

          <div className="flex flex-col text-left">
            <h4 className="text-white text-[14px]">{voucherId}</h4>
            <span className=" font-bold text-transparent text-[12px] bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]">
              {amount} Sol
            </span>
          </div>
        </div>

        <div className="flex gap items-center">
          <button onClick={handleCopy}>
            <DocumentDuplicateIcon className="w-5 h-5 text-primary-white opacity-60 mr-2" />
          </button>

          <ChevronRightIcon className="w-3 h-3 text-primary-white/60" />
        </div>
      </div>
    </button>
  );
}
