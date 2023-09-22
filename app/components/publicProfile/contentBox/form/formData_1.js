import Link from "next/link";

export default function FormData_1() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Craft Your Public Profile
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Create an Eminence profile by choosing an avatar and <br /> entering
        your first and last name. This helps you <br /> connect with others in
        the crypto community.
      </p>
      <Link
        className="mt-[40px] bg-primary-black py-[12px] px-[60px] text-primary-white text-center text-[16px] font-bold rounded-lg w-[320px]"
        href="/createPublicProfile"
      >
        Be an Eminent
      </Link>

      <h1 className="font-medium text-primary-black text-[12px] mt-[6px]">
        Don’t want a public profile?{" "}
        <Link className="underline underline-offset-4" href="">
          Skip for Now
        </Link>
      </h1>
    </div>
  );
}
