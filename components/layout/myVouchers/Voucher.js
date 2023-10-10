'use client';
import useToast from '@/hooks/useToast';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Avatar, { genConfig } from 'react-nice-avatar';

export default function Voucher({ amount, message }) {
  const pubKey = 'FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM';

  const { Info } = useToast();
  return (
    <div
      className="w-full h-[240px] items-center rounded-[8px] p-[1px]"
      style={{
        background: 'linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)',
      }}
    >
      <div className="flex justify-between h-full w-full bg-[#000000] rounded-[8px]">
        <div className="flex">
          <Image
            src="/images/logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="h-[80px] mt-2"
          />
          <Image
            src="/images/myVouchers/Ribbon.svg"
            width={64}
            height={240}
            alt="Ribbon"
            className="-ml-3"
          />
        </div>

        <div className="flex flex-col justify-between items-center py-[16px]">
          <h3 className="text-[56px] text-white font-bold -mt-3">Voucher</h3>
          <p className="text-[14px] break-words	 text-white w-[220px]">
            {message}
          </p>
          <div className="flex w-full gap-[13px] mb-1">
            <p className="text-[20px] text-white ">Amount:</p>
            <div
              className="flex justify-center items-center py-[6px] px-[24px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)',
              }}
            >
              <p className="text-xs text-black font-medium">{amount} Sol</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center py-[16px] mr-[28px]">
          <Image
            src="/images/myVouchers/sampleQr.png"
            width={144}
            height={144}
            alt="QR"
          />
          <div className="flex gap-[12px]">
            <div className="h-[40px] w-[40px] rounded-full border-[2px] flex items-center justify-center border-[#26FFFF]">
              <Avatar
                style={{ width: '32px', height: '32px' }}
                {...genConfig('smkmskmd')}
                className=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className=" font-bold text-transparent text-[14px] bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]">
                Gautam Raj
              </h4>
              <button
                className="text-[#f0f0f099] flex flex-start items-center text-[10px] hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(pubKey);
                  Info('Copied to clipboard');
                }}
              >
                {pubKey.substring(0, 4) +
                  '...' +
                  pubKey.substring(pubKey.length - 4, pubKey.length)}
                <DocumentDuplicateIcon className="w-[11px] h-[11px] ml-[4px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
