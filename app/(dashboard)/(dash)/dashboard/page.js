import MyWallet from "@/components/layout/dashboard/home/MyWallet";
import Contacts from "@/components/layout/dashboard/home/Contacts";
import Transactions from "@/components/layout/dashboard/home/Transactions";
import Graph from "@/components/layout/dashboard/home/Graph";
import TransactionV2 from "@/components/layout/dashboard/home/TransactionV2";
import ContactV2 from "@/components/layout/dashboard/home/ContactV2";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col gap-5 pb-5 ">
      <div className="flex justify-between">
        <MyWallet />
        <ContactV2 />
      </div>
      <TransactionV2 />
      <Graph />
    </section>
  );
}
