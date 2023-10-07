import ProfileHandler from "@/components/layout/profile/ProfileHeader";
import MyWallet from "@/components/layout/dashboard/home/MyWallet";
import CurrencyRatio from "@/components/layout/profile/CurrencyRatio";
import EditProfile from "@/components/layout/profile/EditProfile";
import CardSelect from "@/components/layout/profile/CardSelect";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col gap-5 pb-5 ">
      <ProfileHandler />
      <div className="flex justify-between">
        <MyWallet />
        <CurrencyRatio />
      </div>
      <EditProfile />
      <CardSelect />
    </section>
  );
}
