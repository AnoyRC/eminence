'use client';
import useToast from '@/hooks/useToast';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import Avatar, { genConfig } from 'react-nice-avatar';

export default function ContactTab({ name, status }) {
  const pubKey = 'FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM';
  const { Info } = useToast();
  return (
    <div className="flex w-full rounded-[8px] px-[16px] py-[12px] bg-[#1C1D22]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[12px] items-center relative justify-between w-full">
          <div className="flex gap-[12px] items-center">
            <Avatar
              style={{ width: '2rem', height: '2rem' }}
              {...genConfig(name)}
              className=""
            />

            <div className="flex flex-col justify-center">
              <p className="text-primary-white text-[14px] font-medium">
                {name}
              </p>

              <button
                className="text-[#f0f0f099] flex flex-start items-center text-[12px] hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(pubKey);
                  Info('Copied to clipboard');
                }}
              >
                {pubKey.substring(0, 4) +
                  '...' +
                  pubKey.substring(pubKey.length - 4, pubKey.length)}
                <DocumentDuplicateIcon className="w-[13px] h-[13px] ml-[4px]" />
              </button>
            </div>
          </div>

          <div
            className={` w-[10px] h-[10px] rounded-full ${
              status === 'online'
                ? 'bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]'
                : 'bg-[#DF0000]'
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
}
