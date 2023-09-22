import Link from "next/link";
export default function FormData_1() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Set Password Again
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Establish your access credentials by setting up your <br /> password for
        your wallet.
      </p>
      <input
        type="password"
        className="mt-[40px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-[#f0f0f099] text-primary-black font-normal text-[16px] placeholder-primary-black placeholder-opacity-100"
        placeholder="Enter Password"
      ></input>
      <input
        type="password"
        className="mt-[20px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-[#f0f0f099] text-primary-black font-normal text-[16px] placeholder-primary-black placeholder-opacity-100"
        placeholder="Confirm Password"
      ></input>
      <Link
        className="mt-[40px] bg-primary-black py-[12px] px-[60px]   text-primary-white text-center text-[16px] font-bold rounded-lg w-[320px]"
        href=""
      >
        Confirm Password
      </Link>
    </div>
  );
}
