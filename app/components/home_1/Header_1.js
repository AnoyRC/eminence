import Image from "next/image";

export default function Header_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <h1 className="font-[Satoshi-Bold] text-[36px] text-black">
        Pay anyone, <span className="text-white">anywhere.</span>
      </h1>
      <h1 className="font-[Satoshi-Bold] text-[144px] text-black text-center">
        Empow<span className="text-white">er Your</span>
      </h1>
      <h1 className="font-[Satoshi-Bold] text-[144px] text-black -mt-12 text-center">
        Financial <span className="text-white">Eminence</span>
      </h1>
      <Image
        src="/images/Home_1/Scrolldown.svg"
        width={50}
        height={50}
        className="mt-28"
      />
    </div>
  );
}
