"use client";
import React, { useState, useEffect, useRef } from "react";

import Avatar, { genConfig } from "react-nice-avatar";
import {
  EllipsisHorizontalIcon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

const sender = "Sourabh";
export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChat([...chat, { user: "You", message, isSender: true }]);
      setMessage("");
    }
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chat]);

  return (
    <div className="flex flex-col h-[590px] w-full border border-[#f0f0f099]">
      <div className="flex justify-between items-center w-full  my-[8px] px-[20px]">
        <div className="flex gap-[20px]">
          <div className="relative">
            <Avatar
              style={{ width: "3rem", height: "3rem" }}
              {...genConfig(sender)}
              className=""
            />
            <div
              className={`absolute bottom-0 right-0 w-[7px] h-[7px] rounded-full ${
                { sender } === "online"
                  ? "bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]"
                  : "bg-[#DF0000]"
              } mb-9 `}
            ></div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-transparent  text-[20px] bg-clip-text bg-gradient-to-r from-[#4AFF93] to-[#26FFFF] font-medium">
              {sender}
            </h1>
            <p className="text-[12px] font-medium text-[#f0f0f099]">Active</p>
          </div>
        </div>
        <div className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-white">
          <div className="flex justify-center items-center rounded-full w-[22px] h-[22px] bg-black/90">
            <EllipsisHorizontalIcon color="white" />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#f0f0f099]"></div>
      <div className=" flex-1 overflow-y-auto p-4 " ref={chatContainerRef}>
        {chat.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.isSender ? "items-end" : "items-start"
            } mb-2`}
          >
            <div
              className={`px-[16px] py-[9px] rounded-full  text-[14px] font-normal`}
              style={{
                background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
              }}
            >
              {item.message}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center py-[8px] px-[20px] gap-[20px]">
        <Avatar
          style={{ width: "3rem", height: "3rem" }}
          {...genConfig("sourabh")}
          className=""
        />
        <div className="w-full h-[48px] flex items-center rounded-full bg-black  ">
          <ChatBubbleLeftIcon className="text-white w-[24px] h-[24px] pl-[6px]" />
          <input
            type="text"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent flex-1 pl-[16px] text-whit"
          />
          <div
            onClick={handleSendMessage}
            className="w-[36px] h-[36px] rounded-full flex justify-center items-center cursor-pointer "
            style={{
              background: "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
            }}
          >
            <PaperAirplaneIcon className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
