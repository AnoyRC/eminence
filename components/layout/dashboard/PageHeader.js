'use client';

import { usePathname } from 'next/navigation';
import { Switch } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const PageHeader = () => {
  const path = usePathname();

  return (
    <div className="w-full border-[#f0f0f099] border-b-[1px] h-[72px] rounded-t-[8px] flex items-center justify-between px-[20px]">
      <h2 className="text-transparent text-[24px] font-bold bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]">
        {
          {
            '/dashboard': 'Dashboard',
            '/deposit': 'Deposit',
            '/transactions': 'Transactions',
            '/profile': 'Profile',
            '/myVouchers': 'My Vouchers',
            '/contacts': 'Contacts',
          }[path]
        }
      </h2>

      <div className="w-[400px] h-[48px] bg-black rounded-full flex text-white p-[12px]">
        <MagnifyingGlassIcon />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none border-none text-[16px] ml-[12px] w-full"
        />
      </div>

      <div className="flex gap-[8px] items-center">
        <h1 className="text-[16px] text-white font-bold">Devnet</h1>
        <Switch
          id="custom-switch-component"
          ripple={false}
          className="h-full w-full checked:bg-gradient-to-r checked:from-[#4AFF93] checked:to-[#26FFFF]"
          containerProps={{
            className: 'w-11 h-6',
          }}
          circleProps={{
            className: 'before:hidden left-0.5 border-none',
          }}
        />
        <h1 className="text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF] font-bold">
          Mainnet
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
