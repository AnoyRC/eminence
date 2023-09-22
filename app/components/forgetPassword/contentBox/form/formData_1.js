import Link from "next/link";
export default function FormData_2() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Reset Password with Security <br /> Phrase
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        You can reset it by confirming your security phrase. A <br /> successful
        match will allow you to create a new <br /> password and regain access
        Eminence. Eminence <br /> cannot recover your password for you.
      </p>
      <Link
        className="mt-[40px] bg-[#1C1D22] py-[12px] px-[60px]  text-bold text-primary-white text-center text-[16px] rounded-lg w-[320px]"
        href="/import"
      >
        Continue
      </Link>
      <Link
        className="mt-[12px] bg-[#1C1D22] py-[12px] px-[60px]  text-[Satoshi-Bold] text-white text-center text-[16px] rounded-lg w-[320px]"
        href="/onboard"
      >
        Create New Account
      </Link>
      <p className="font-bold text-primary-black text-[12px] mt-[6px]">
        Remember Password?{" "}
        <Link href="/login" className="cursor-pointer underline">
          Go back
        </Link>
      </p>
    </div>
  );
}
