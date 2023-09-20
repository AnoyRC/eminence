import Link from "next/link";

export default function FormData_1() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-[Satoshi-Bold] text-center text-black">
        Craft Your Public Profile
      </h1>
      <p className="text-[16px] font-[Satoshi-Regular] text-center text-[#1C1D22] mt-[18px]">
        Create an Eminence profile by choosing an avatar and <br /> entering
        your first and last name. This helps you <br /> connect with others in
        the crypto community.
      </p>
      <Link
        className="mt-[40px] bg-[#1C1D22] py-[12px] px-[60px]  text-[Satoshi-Bold] text-white text-center text-[16px] rounded-lg w-[320px]"
        href="/createPublicProfile"
      >
        Be an Eminent
      </Link>

      <h1 className="font-[Satoshi-Regular] text-black text-[12px] mt-[6px]">
        Don’t want a public profile?{" "}
        <Link className="underline underline-offset-4" href="">
          Skip for Now
        </Link>
      </h1>
    </div>
  );
}
