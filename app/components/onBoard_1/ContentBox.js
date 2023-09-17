import Image from "next/image";
import DynamicHeader from "./contentBox/DynamicHeader";
import Form from "./contentBox/Form";

export default function ContentBox() {
  return (
    <div className="flex flex-col items-center mt-[40px] relative">
      <Image
        src="/images/OnBoard_1/ContentBox/ConcurrentCircles.svg"
        width={600}
        height={742}
        alt="Circles"
        className="absolute top-0 left-[50%] transform -translate-x-1/2"
      />
      <DynamicHeader />
      <Form />
    </div>
  );
}
