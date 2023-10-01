import Voucher from "@/components/layout/myVouchers/Voucher";
import VoucherEditor from "@/components/layout/myVouchers/VoucherEditor";
import GradientButton from "@/components/ui/GradientButton";
import GradientButton2 from "@/components/ui/GradientButton2";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col gap-5">
      <Voucher />
      <VoucherEditor />
      <GradientButton label="Create Voucher" />
      <GradientButton2 label="Share Link" />
    </section>
  );
}
