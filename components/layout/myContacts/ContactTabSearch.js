'use client';
import useToast from '@/hooks/useToast';
import { DocumentDuplicateIcon, PlusIcon } from '@heroicons/react/24/solid';
import Avatar, { genConfig } from 'react-nice-avatar';

export default function ContactTabSearch({ name, status, pubkey }) {
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
              <h1 className="text-primary-white text-[14px] font-medium">
                {name}
              </h1>
              <button
                className="text-[#f0f0f099] flex flex-start items-center text-[12px] hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(pubkey);
                  Info('Copied to clipboard');
                }}
              >
                {pubkey.substring(0, 4) +
                  '...' +
                  pubkey.substring(pubkey.length - 4, pubkey.length)}
                <DocumentDuplicateIcon className="w-[13px] h-[13px] ml-[4px]" />
              </button>
            </div>
          </div>
          <div
            className="flex justify-center items-center p-[8px] rounded-full w-[32px] hover:cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)',
            }}
          >
            <PlusIcon className="h-4 w-4 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
