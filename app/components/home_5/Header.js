import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center text-black font-[Satoshi-Bold] text-center text-[144px]">
      <h1>Experience the</h1>
      <h1 className="-mt-10">Future of Finance</h1>
      <div className="flex -mt-10">
        <h1>Unlock</h1>
        <Image
          src="/images/Home_1/Navbar/Logo.png"
          width={240}
          height={50}
          alt="Logo"
        />
        <h1>Today</h1>
      </div>
    </div>
  );
}
