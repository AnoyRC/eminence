"use client";

import CardContainer from "@/components/layout/profile/userProfile/CardContainer";

const page = ({ params }) => {
  return (
    <div className="w-screen h-screen bg-primary-black">
      <div className=" flex flex-row max-w-2xl gap-5 mx-auto h-full justify-center items-center">
        <CardContainer />
      </div>
    </div>
  );
};

export default page;
