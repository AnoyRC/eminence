import Navbar from "./home_1/Navbar";

export default function Home_1() {
  return (
    <div className="h-screen w-screen relative -z-10">
      <div className="h-screen w-screen absolute flex top-0 left-0">
        <div className="w-[50%] h-full bg-white"></div>
        <div className="w-[50%] h-full bg-[#1C1D22]"></div>
      </div>
      <Navbar />
    </div>
  );
}
