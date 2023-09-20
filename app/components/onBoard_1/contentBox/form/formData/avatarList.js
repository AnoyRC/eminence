import React, { useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const avatarData = [
  {
    key: "avatar1",
    config: "tawifua",
  },
  {
    key: "avatar2",
    config: "vafaa",
  },
  {
    key: "avatar3",
    config: "ragnaja",
  },
  {
    key: "avatar4",
    config: "mabhfgeaf",
  },
  {
    key: "avatar5",
    config: "mznvmznbv",
  },
  {
    key: "avatar2",
    config: "fnvzbvba",
  },
  {
    key: "avatar3",
    config: "ahfagfaugef",
  },
  {
    key: "avatar4",
    config: "anfjkgka",
  },
  {
    key: "avatar5",
    config: "ahgkajhgak",
  },
  {
    key: "avatar10",
    config: "jsgnrs",
  },
  {
    key: "avatar11",
    config: "snsnbsh",
  },
  {
    key: "avatar12",
    config: "amnkjre",
  },
  {
    key: "avatar13",
    config: "lakjbhb",
  },
  {
    key: "avatar14",
    config: "egbajbg",
  },
  {
    key: "avatar15",
    config: "anand",
  },
];

function AvatarList({ setSelectedAvatarConfig }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const avatarsPerPage = 5;

  const handleAvatarClick = (avatar) => {
    // setSelectedAvatar(avatar);
    setSelectedAvatarConfig(avatar.config);
  };

  const handleNextClick = () => {
    if (startIndex + avatarsPerPage < avatarData.length) {
      setStartIndex(startIndex + avatarsPerPage);
    }
  };

  const handlePrevClick = () => {
    if (startIndex - avatarsPerPage >= 0) {
      setStartIndex(startIndex - avatarsPerPage);
    }
  };
  const visibleAvatars = avatarData.slice(
    startIndex,
    startIndex + avatarsPerPage
  );
  return (
    <div className="flex items-center justify-center p-4">
      <div className="cursor-pointer text-2xl mr-4" onClick={handlePrevClick}>
        <ChevronLeftIcon className="text-black h-6 w-6" />
      </div>
      <div className="flex overflow-x-auto py-3">
        {visibleAvatars.map((avatar, index) => (
          <div
            key={avatar.key}
            className="mr-4 cursor-pointer"
            onClick={() => handleAvatarClick(avatar)}
          >
            <Avatar
              style={{ width: "3rem", height: "3rem" }}
              {...genConfig(avatar.config)}
              className=" transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </div>
        ))}
      </div>
      <div className="cursor-pointer text-2xl " onClick={handleNextClick}>
        <ChevronRightIcon className="text-black h-6 w-6" />
      </div>
    </div>
  );
}

export default AvatarList;
