"use client";
import React from "react";
import { avatar } from "@material-tailwind/react";
import Avatar, { genConfig } from "react-nice-avatar";

const Contacts = () => {
  const contacts = [
    { name: "Sourabh", status: "online" },
    { name: "Gautam Raj", status: "online" },
    { name: "Anoy", status: "online" },
    { name: "Pratik", status: "offline" },
  ];

  const chunkSize = 2; // Number of avatars per row

  const chunkedContacts = [];
  for (let i = 0; i < contacts.length; i += chunkSize) {
    chunkedContacts.push(contacts.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full h-screen relative bg-primary-white flex items-center justify-center flex-col">
      <div className="w-[310px] bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]  rounded-lg p-1 ">
        <div className="bg-primary-black h-full rounded-lg">
          {chunkedContacts.map((chunk, index) => (
            <div key={index} className="flex justify-center items-center mb-4">
              {chunk.map((contact) => (
                <div
                  key={contact.name}
                  className=" flex flex-col items-center w-[120px] mt-[20px]"
                >
                  <div className="relative">
                    <Avatar
                      style={{ width: "2rem", height: "2rem" }}
                      {...genConfig(contact.name)}
                      className=""
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-[6px] h-[6px] rounded-full ${
                        contact.status === "online"
                          ? "bg-primary"
                          : "bg-red-500"
                      } -mr-19 mb-15`}
                    ></div>
                  </div>
                  <h1 className="text-center text-primary-white text-[14px] font-bold mt-[12px]">
                    {contact.name}
                  </h1>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
