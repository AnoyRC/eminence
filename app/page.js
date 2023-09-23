import Header from "@/components/layout/Home/Header";
import Background from "@/components/layout/Home/Background";
import SolanaBox from "@/components/layout/Home/SolanaBox";
import Card from "@/components/layout/Home/Card";
import Features from "@/components/layout/Home/Features";
import Experience from "@/components/layout/Home/Experience";
import ToastHandler from "@/components/toast/toastHandler";

export default function Home() {
  return (
    <main className="">
      <Background />

      <Header />
      <SolanaBox />
      <Card />
      <Features />
      <Experience />
    </main>
  );
}
