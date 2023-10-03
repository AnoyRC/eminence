import MyWallet from "@/components/layout/dashboard/home/MyWallet";
import Contacts from "@/components/layout/dashboard/home/Contacts";
import Transactions from "@/components/layout/dashboard/home/Transactions";
import Graph from "@/components/layout/dashboard/home/Graph";
import ChatBox from "@/components/layout/myContacts/ChatBox";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col gap-5 pb-5">
      {/* Import My Wallet, Contacts, Transactions, Graph */}
      <ChatBox />
    </section>
  );
}
