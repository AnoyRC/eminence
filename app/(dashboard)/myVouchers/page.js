import Voucher from "@/components/layout/myVouchers/Voucher";
import VoucherEditor from "@/components/layout/myVouchers/VoucherEditor";
import SquareButton from "@/components/ui/SquareButton";
import SquareGradientButton from "@/components/ui/SquareGradientButton";
import { ArrowUpRightIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col gap-5 pb-5">
      <Voucher />
      <VoucherEditor />
      <div className="flex justify-between w-full">
        <div className="w-[48%]">
          <SquareGradientButton
            Icon={PlusIcon}
            Line1={"Create"}
            Line2={"One"}
          />
        </div>
        <div className="w-[48%]">
          <SquareButton
            Icon={ArrowUpRightIcon}
            Line1={"Share"}
            Line2={"Link"}
          />
        </div>
      </div>
    </section>
  );
}
