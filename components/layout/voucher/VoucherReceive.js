'use client';

import { Input } from '@material-tailwind/react';

import Balance from '@/components/ui/Balance';
import Button from '@/components/ui/Button';

export default function VoucherReceive({ balance, value }) {
  return (
    <div className="w-full items-center rounded-[8px] p-[1px] bg-gradient-priamry">
      <div className="flex justify-between h-full w-full bg-black rounded-lg p-2 gap-3 items-center">
        <div className="w-2/5">
          <Balance
            symbol="sol"
            balance={balance ? balance : 0}
            value={value ? value : 0}
            type="Receive"
            editable
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <form className="flex-grow px-5 flex flex-col gap-4">
          <Input variant="standard" label="Enter Password" color="white" />
          <Input variant="standard" label="Receiver Addresss" color="white" />

          <Button
            label="Claim"
            fullWidth
            color="bg-gradient-priamry"
            style="font-bold py-2 rounded-lg mt-5"
          />
        </form>
      </div>
    </div>
  );
}
