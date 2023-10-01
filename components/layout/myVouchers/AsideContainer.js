import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import VoucherTab from "./VoucherTab";

const vouchers = [
  { voucherId: "123456789", amount: "293" },
  { voucherId: "1011121314", amount: "27" },
];

export default function AsideContainer() {
  return (
    <aside className="py-[28px] w-[300px] h-full bg-black/40 flex flex-col px-[28px] gap-[28px]">
      {/* Search Bar */}
      <div
        className="w-full h-[48px] rounded-full flex text-white p-[1px]"
        style={{
          background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
        }}
      >
        <div className="w-full h-full flex rounded-full bg-black p-[12px]">
          <MagnifyingGlassIcon />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none border-none text-[16px] ml-[12px] w-full"
          />
        </div>
      </div>

      <h1 className="text-white text-[24px] font-bold">Vouchers</h1>

      <div className="flex flex-col gap-[12px] w-full">
        {vouchers.map((voucher) => (
          <VoucherTab
            key={voucher.voucherId}
            voucherId={voucher.voucherId}
            amount={voucher.amount}
          />
        ))}
      </div>
    </aside>
  );
}
