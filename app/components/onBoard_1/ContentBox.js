import Image from "next/image";
import DynamicHeader from "./contentBox/DynamicHeader";
import Form from "./contentBox/Form";

export default function ContentBox() {
  return (
    <div className="flex flex-col items-center mt-[60px] relative">
      <Image
        src="/images/OnBoard_1/ContentBox/ConcurrentCircles.svg"
        width={700}
        height={742}
        alt="Circles"
        className="absolute top-0 left-0"
      />
      <DynamicHeader />
      <Form />
    </div>
  );
}
