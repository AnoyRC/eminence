'use client';
import useOnboard from '@/hooks/useOnboard';
import FormButton from './formData/FormButton';

export default function FormData_1() {
  const { step1 } = useOnboard();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Getting Started
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Begin your journey by setting up your wallet, whether <br /> it's
        creating a new one or importing an existing wallet.
      </p>
      <FormButton
        className="mt-[60px]"
        text="Create New Wallet"
        onClick={step1.CreateWallet}
      />
      <FormButton
        className="mt-[20px]"
        text="Import your Wallet"
        onClick={step1.importWallet}
      />
    </div>
  );
}
