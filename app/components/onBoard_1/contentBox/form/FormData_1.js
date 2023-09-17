import FormButton from "./formData/FormButton";

export default function FormData_1() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-[Satoshi-Bold] text-center text-black">
        Getting Started
      </h1>
      <p className="text-[16px] font-[Satoshi-Regular] text-center text-[#1C1D22] mt-[18px]">
        Begin your journey by setting up your wallet, whether <br /> it's
        creating a new one or importing an existing wallet.
      </p>
      <FormButton className="mt-[60px]" text="Create New Wallet" />
      <FormButton className="mt-[20px]" text="Import your Wallet" />
    </div>
  );
}
