import Voucher from "@/components/layout/myVouchers/Voucher";
export default function VoucherId({ params }) {
  console.log(params);
  return (
    <div className="w-screen h-screen bg-primary-black flex items-center justify-center">
      <div className="w-[604px]">
        <Voucher route={`http://localhost:3000/voucher/${params.voucherId}`} />
      </div>
    </div>
  );
}
