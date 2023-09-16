import Background from "./home_1/Background";
import Header_1 from "./home_1/Header_1";
import Navbar from "./home_1/Navbar";

export default function Home_1() {
  return (
    <div className="h-screen w-screen flex flex-col relative">
      <Background />
      <Navbar />
      <Header_1 />
    </div>
  );
}
