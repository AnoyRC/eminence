"use client";
import React, { useEffect, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import AvatarList from "../form/formData/avatarList";
import Link from "next/link";

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export default function FormData_1() {
  const [randomString, setRandomString] = useState(generateRandomString(10));
  const [selectedAvatarConfig, setSelectedAvatarConfig] = useState(null);
  const [client, setClient] = useState(false);

  const generateNewAvatar = () => {
    setSelectedAvatarConfig(null);
    const newRandomString = generateRandomString(10);
    setRandomString(newRandomString);
  };

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Craft Your Public Profile
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Personalize your wallet to become an{" "}
        <span className="text-black">'Eminent'</span> by <br /> setting up your
        public profile with an avatar and your <br /> first and last name.
      </p>
      <div className="relative">
        {/* Avatar */}
        {client && (
          <Avatar
            style={{ width: "15rem", height: "15rem" }}
            {...genConfig(
              selectedAvatarConfig ? selectedAvatarConfig : randomString
            )}
            className="mt-[40px] border-black border-2"
          />
        )}

        {/* Refresh button (circle) */}
        <div
          className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-[#CDFFF9] border-black border-[1px] flex justify-center items-center -mr-19 mb-15 cursor-pointer on"
          onClick={generateNewAvatar}
        >
          <ArrowPathIcon className="text-primary-black h-6 w-6" />
        </div>
      </div>
      <input
        type="text"
        className="mt-[40px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-primary-white/60 text-primary-black font-normal text-[16px] placeholder-primary-black placeholder-opacity-100"
        placeholder="First Name"
      ></input>
      <input
        type="text"
        className="mt-[40px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-primary-white/60 text-primary-black font-normal text-[16px] placeholder-primary-black placeholder-opacity-100"
        placeholder="Last Name"
      ></input>
      <Link
        className="mt-[40px] bg-primary-black py-[12px] px-[60px]   text-primary-white text-center text-[16px] font-bold rounded-lg w-[320px]"
        href=""
      >
        Complete
      </Link>
      {client && (
        <AvatarList
          setSelectedAvatarConfig={setSelectedAvatarConfig}
          className="mt-[40px]"
        />
      )}
    </div>
  );
}
