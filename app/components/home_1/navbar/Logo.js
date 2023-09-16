import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center pl-[10px] z-10">
      <Image
        src="/images/Home_1/Navbar/Logo.png"
        width={100}
        height={50}
        alt="Logo"
      />
      <h1 className="text-black font-[Satoshi-Bold] text-[36px]">Eminence</h1>
    </div>
  );
}
