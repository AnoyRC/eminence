"use client";
import CardFront from "@/components/layout/profile/CardFront";
import CardBack from "@/components/layout/profile/CardBack";

const page = ({ params }) => {
  return (
    <div className="w-screen h-screen bg-primary-black">
      <div className=" flex flex-row max-w-2xl gap-5 mx-auto h-full justify-center items-center">
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
};

export default page;
