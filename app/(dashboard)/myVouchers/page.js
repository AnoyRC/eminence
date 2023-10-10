'use client';

import { useState, useEffect } from 'react';

import Voucher from '@/components/layout/myVouchers/Voucher';
import VoucherEditor from '@/components/layout/myVouchers/VoucherEditor';
import Button from '@/components/ui/Button';

import { generateRandomString } from '@/components/layout/userManagement/routes/eminent/generateRandomString';
import useToast from '@/hooks/useToast';

export default function Home() {
  const { Success, Error } = useToast();
  const [amount, setAmount] = useState(0.0);
  const [message, setMessage] = useState(
    'Your Custom message for the receiver. The maximum character you can store is 100.'
  );
  const [password, setPassword] = useState('');
  const [voucherId, setVoucherId] = useState('');

  const handleCreateVoucher = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/voucher/create`, {
        method: 'POST',
        body: JSON.stringify({
          amount,
          message,
          voucherId,
          cardColor: 'Black',
        }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('x-auth-token'),
          'x-auth-pubkey': localStorage.getItem('x-auth-pubkey'),
        },
      });

      const data = await response.json();

      if (data.error) {
        return Error(data.error);
      }

      setAmount(0);
      setMessage(
        'Your Custom message for the receiver. The maximum character you can store is 80.'
      );
      setPassword('');
      setVoucherId(generateRandomString(10));

      Success('Voucher Created Successfully');
    } catch (err) {
      console.log(err);
      Error('Something went wrong');
    }
  };

  useEffect(() => {
    setVoucherId(generateRandomString(10));
  }, []);

  return (
    <section className="w-full h-full flex flex-col gap-5">
      <Voucher
        amount={amount}
        message={message}
        pubKey={localStorage.getItem('x-auth-pubkey')}
      />

      <VoucherEditor
        amount={amount}
        message={message}
        password={password}
        voucherId={voucherId}
        setAmount={setAmount}
        setMessage={setMessage}
        setPassword={setPassword}
      />

      <Button
        label="Create Voucher"
        rounded
        fullWidth
        color={'bg-gradient-priamry'}
        style={'font-bold py-2 mt-3'}
        onClick={handleCreateVoucher}
      />
    </section>
  );
}
