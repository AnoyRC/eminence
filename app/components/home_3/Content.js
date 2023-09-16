import Image from "next/image";

export default function Content() {
  return (
    <div className="w-[100%] h-[80%] flex flex-col items-center justify-between relative">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-[Satoshi-Bold] text-[96px] text-black">
          Get your <span className="text-white">Own Card</span>
        </h1>
        <h1 className="font-[Satoshi-Bold] text-[96px] text-black text-center -mt-8">
          De<span className="text-white">sign</span>
        </h1>
      </div>
      <div className="flex justify-between w-[80%]">
        <Image
          src="/images/Home_3/FrontCardDesign.svg"
          width={500}
          height={50}
        />
        <Image
          src="/images/Home_3/FrontCardDesignWhite.svg"
          width={500}
          height={50}
        />
      </div>
    </div>
  );
}
