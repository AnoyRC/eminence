import Background from "./home_4/background";
import ScrollSection from "./home_4/scrollSection";
export default function Home_4() {
  return (
    <div className="mx-auto">
      <Background />
      <div className="relative mt-8">
        <h1 className="font-[Satoshi-Bold] text-[64px] text-black text-center">
          Empower<span className="text-white">ed by You,</span>
        </h1>
        <h1 className="font-[Satoshi-Bold] text-[64px] text-black -mt-3 text-center">
          Safeguard <span className="text-white">ed by Us</span>
        </h1>
      </div>
      <ScrollSection />
    </div>
  );
}
