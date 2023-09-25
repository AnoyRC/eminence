import MyWallet from "@/components/layout/dashboard/home/MyWallet";
import Contacts from "@/components/layout/dashboard/home/Contacts";
import Transactions from "@/components/layout/dashboard/home/Transactions";
import Graph from "@/components/layout/dashboard/home/Graph";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col">
      <Graph />
    </section>
  );
}
