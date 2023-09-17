import FormButton from "./formData/FormButton";
import useOnboard from "@/app/hooks/useOnboard";

export default function FormData_4() {
  const { step4 } = useOnboard();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-[Satoshi-Bold] text-center text-black">
        Create Password and Confirm <br /> Password
      </h1>
      <p className="text-[16px] font-[Satoshi-Regular] text-center text-[#1C1D22] mt-[18px]">
        Establish your access credentials by setting up your <br /> password for
        your wallet.
      </p>
      <input
        type="password"
        className="mt-[40px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-[#f0f0f099] text-black font-[Satoshi-Regular] text-[16px]"
        placeholder="Enter Password"
      ></input>
      <input
        type="password"
        className="mt-[20px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-[#f0f0f099] text-black font-[Satoshi-Regular] text-[16px]"
        placeholder="Confirm Password"
      ></input>
      <FormButton
        className="mt-[40px]"
        text="Confirm Password"
        onClick={step4.ConfirmPassword}
      />
    </div>
  );
}
