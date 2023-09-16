import Image from "next/image";
import Home_1 from "./components/Home_1";
import Home_2 from "./components/Home_2";
import Home_3 from "./components/Home_3";
import Home_5 from "./components/Home_5";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Home_1 />
      <Home_2 />
      <Home_3 />
      <Home_5 />
    </main>
  );
}
