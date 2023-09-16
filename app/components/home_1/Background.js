import Image from "next/image";

export default function Background() {
  return (
    <div className="h-screen w-screen absolute flex top-0 left-0">
      <div className="w-[50%] h-full bg-white"></div>
      <div className="w-[50%] h-full bg-[#1C1D22]"></div>
      <Image
        src="/images/Home_1/divider.svg"
        alt="divider"
        width={1200}
        height={1200}
        className="absolute left-1/2 -translate-x-1/2 h-[100%]"
      />
    </div>
  );
}
