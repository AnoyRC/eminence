import Image from "next/image";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import Avatar, { genConfig } from "react-nice-avatar";

export default function CardBack({ toggleCard, design }) {
  const backgroundColor =
    design === "white" ? "bg-primary-white" : "bg-primary-black";
  const textColor =
    design === "white" ? "text-primary-black" : "text-primary-white";
  const accountNoColor =
    design === "white" ? "text-[#1c1d22cc]" : "text-[#CCC]";
  return (
    <div
      className={`${backgroundColor} relative overflow-hidden  w-[320px] h-[436px] shadow-md shadow-[#ffffff40] rounded-2xl`}
    >
      <div className="absolute w-[500px] h-[500px] left-12">
        <Image
          src="/images/Frame_32.png"
          width={412}
          height={400}
          className="w-full h-full"
        />
      </div>

      <div className=" w-full h-full flex flex-row items-center gap-5">
        <div className=" w-full h-full flex flex-col justify-between items-end px-3 py-3">
          <button
            onClick={() => toggleCard()}
            className="hover:cursor-pointer z-20"
          >
            <ArrowPathRoundedSquareIcon
              className={`${textColor} h-[25px] w-[25px] `}
            />
          </button>

          <div className="w-full flex gap-[12px] items-center">
            <Avatar
              style={{ width: "55px", height: "55px" }}
              {...genConfig("sourabh")}
              className=""
            />

            <div className="  flex flex-col justify-center justify-items-start">
              <h1 className={`${textColor} text-[18px] font-medium`}>
                Sourabh Singh
              </h1>
              <p
                className={`${accountNoColor} flex flex-start items-center text-[13px]`}
              >
                8421....0792
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
