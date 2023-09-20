import Link from "next/link";
export default function FormData_1() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-[Satoshi-Bold] text-center text-black">
        Eminence Welcomes You!
      </h1>
      <p className="text-[16px] font-[Satoshi-Regular] text-center text-[#1C1D22] mt-[18px]">
        Please enter your password to unlock and access <br /> Eminence
        securely.
      </p>
      <input
        type="password"
        className="mt-[40px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-[#f0f0f099] text-black font-[Satoshi-Regular] text-[16px]"
        placeholder="Enter Password"
      ></input>

      <Link
        className="mt-[40px] bg-[#1C1D22] py-[12px] px-[60px]  text-[Satoshi-Bold] text-white text-center text-[16px] rounded-lg w-[320px]"
        href=""
      >
        Unlock
      </Link>

      <p className="font-[Satoshi-Bold] text-black text-[12px] mt-[6px]">
        Forgot Password?{" "}
        <Link href="/forgetPassword" className="cursor-pointer underline">
          Generate New
        </Link>
      </p>
    </div>
  );
}
