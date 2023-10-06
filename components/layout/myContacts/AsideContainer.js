"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import ContactTab from "./ContactTab";
import { togglePopup } from "@/redux/contactsSlice";
import { useDispatch } from "react-redux";

const contacts = [
  { name: "Sourabh", status: "online" },
  { name: "Gautam Raj", status: "online" },
  { name: "Anoy", status: "online" },
  { name: "Pratik", status: "offline" },
];

export default function AsideContainer() {
  const dispatch = useDispatch();
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

      <div className="flex flex-col gap-[12px] w-full">
        {contacts.map((contact) => (
          <ContactTab
            key={contact.name}
            name={contact.name}
            status={contact.status}
          />
        ))}
      </div>
    </aside>
  );
}
