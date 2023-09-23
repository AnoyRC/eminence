"use client";
import useToast from "@/hooks/useToast";

export default function dashboard() {
  const { Error, Success, Info } = useToast();
  return (
    <div className="overflow-x-hidden bg-[#1C1D22] w-screen h-screen">
      <button onClick={() => Success("Success")} className="bg-white mr-5">
        Success
      </button>
      <button onClick={() => Error("Error")} className="bg-white mr-5">
        Error
      </button>
      <button onClick={() => Info("Info")} className="bg-white mr-5">
        Info
      </button>
    </div>
  );
}
