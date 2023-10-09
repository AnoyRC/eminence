'use client';

import { Input, Textarea } from '@material-tailwind/react';

import Balance from '@/components/ui/Balance';

export default function VoucherEditor() {
  return (
    <div className="w-full items-center rounded-[8px] p-[1px] bg-gradient-priamry">
      <div className="flex justify-between h-full w-full bg-black rounded-lg p-2 gap-3">
        <div className="w-2/5">
          <Balance
            symbol="SOL"
            balance={100}
            value={100}
            type="Send"
            editable
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div className="flex-grow px-5 flex flex-col gap-4">
          <p className="text-white font-bold text-xl">
            Voucher Id:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-priamry">
              256789801
            </span>
          </p>

          <Input variant="standard" label="Password" color="white" />
          <Textarea
            label="Custom Message"
            variant="standard"
            className="border-white text-white"
            labelProps={{
              className:
                ' peer-placeholder-shown:text-white peer-disabled:peer-placeholder-shown:text-white peer-focus:text-white after:border-white peer-focus:after:!border-white',
            }}
          />
        </div>
      </div>
    </div>
  );
}
