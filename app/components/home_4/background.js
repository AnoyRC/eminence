import Image from "next/image";
import Slider from "./slider";
export default function Background() {
  return (
    <div className="h-screen w-screen fixed flex top-0 left-0">
      <div className="w-[50%] h-full bg-white"></div>
      <div className="w-[50%] h-full bg-[#1C1D22]"></div>
    </div>
  );
}
