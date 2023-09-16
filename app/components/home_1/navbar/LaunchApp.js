import Image from "next/image";

export default function LaunchApp() {
  return (
    <div className="relative">
      <Image
        src="/images/Home_1/Navbar/LaunchButton.svg"
        width={200}
        height={50}
      />
      <h1 className="text-white font-[Satoshi-Bold] text-[24px] absolute top-[37%] right-[15%]">
        Launch App
      </h1>
    </div>
  );
}
