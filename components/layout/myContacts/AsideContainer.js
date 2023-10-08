"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import ContactTab from "./ContactTab";
import { togglePopup } from "@/redux/contactsSlice";
import { useDispatch } from "react-redux";

import Contacts from "./Contacts";

export default function AsideContainer() {
  const dispatch = useDispatch();
  return (
    <aside className="p-6 w-[300px] h-full bg-black/40 flex flex-col">
      <div className="flex justify-center items-center text-white p-[1px] rounded-full mb-7 bg-gradient-priamry">
        <div className="w-full h-full flex justify-center items-center rounded-full bg-black px-3 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-primary-white" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-base ml-3 w-full text-primary-white"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-white text-[24px] font-bold">Contacts</h1>
        <div
          className="flex justify-center items-center p-[8px] rounded-full w-[32px] hover:cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
          }}
          onClick={() => dispatch(togglePopup(true))}
        >
          <UserPlusIcon className="h-4 w-4" />
        </div>
      </div>

      <Contacts />
    </aside>
  );
}
