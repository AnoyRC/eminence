"use client";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../../public/fonts/Satoshi-Variable.woff2",
});

const MyWallet = () => {
  const [activeTab, setActiveTab] = useState("Sol");

  const data = [
    {
      label: "Sol",
      value: "Sol",
      amount: 71.27,
      changeValue: "+08.14",
    },
    {
      label: "USDC",
      value: "USDC",
      amount: 36.5,
      changeValue: "+27.14",
    },
  ];

  return (
    <Tabs
      value={activeTab}
      className="flex  flex-col w-[310px] h-[230px] bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]  rounded-lg px-[20px] pt-[20px] gap-[24px]"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[14px]">My Wallet</h1>
        <div className=" w-[168px] rounded-full">
          <TabsHeader
            className="rounded-full bg-[#1C1D22] text-white w-full h-[32px] bg-opacity-100"
            indicatorProps={{
              className:
                "rounded-full bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "text-black transition-colors duration-300 flex justify-center items-center"
                    : "text-white transition-colors duration-300 flex justify-center items-center"
                }
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <TabsBody className="">
          {data.map(({ amount, changeValue, value }) => (
            <TabPanel
              key={amount}
              value={value}
              className={
                "p-1 h-full flex flex-col items-center justify-center " +
                myFont.className
              }
            >
              <div className="text-[48px] font-bold text-primary-black relative leading-10">
                <span className="text-[48px] font-bold">
                  {Math.trunc(amount)}.
                </span>
                <span className="text-[32px] font-bold">
                  {Math.trunc(amount) !== 0 && amount.toString().split(".")[1]}
                </span>
                <span> {value}</span>
              </div>
              <p className="text-[14px] font-bold">
                <span>
                  {changeValue[0]}
                  {Math.trunc(changeValue)}.
                </span>
                <span className="text-[10px]">
                  {Math.trunc(changeValue) !== 0 &&
                    changeValue.toString().split(".")[1]}
                  %
                </span>

                <span className="tex-[12px] font-medium ml-[4px]">
                  {" "}
                  Last Week
                </span>
              </p>
            </TabPanel>
          ))}
        </TabsBody>
        <div className="flex items-center justify-center w-full">
          <Button
            className=" bg-primary-black  w-full flex flex-row  text-primary-white items-center justify-center text-[14px] font-bold rounded-full"
            href=""
            style={{
              textTransform: "none",
            }}
          >
            Buy
            <span>
              <ArrowUpRightIcon className="h-4 w-4 ml-2 text-primary-white" />
            </span>
          </Button>
        </div>
      </div>
    </Tabs>
  );
};

export default MyWallet;
