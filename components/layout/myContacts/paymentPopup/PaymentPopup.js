"use client";

import { useEffect, useState } from "react";
import {
  DocumentDuplicateIcon,
  RocketLaunchIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import localFont from "next/font/local";
import { useDispatch, useSelector } from "react-redux";
import { togglePayPopup } from "@/redux/contactsSlice";
import useGetServer from "@/hooks/useGetServer";

import Avatar, { genConfig } from "react-nice-avatar";
import useToast from "@/hooks/useToast";
import useTransfer from "@/hooks/useTransfer";

const myFont = localFont({
  src: "../../../../public/fonts/Satoshi-Variable.woff2",
});

export default function PaymentPopup() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const { getUserByPubkey } = useGetServer();
  const isPopup = useSelector((state) => state.contacts.isPayPopup);
  const currentContact = useSelector((state) => state.contact.contact);
  const { Success, Error } = useToast();
  const [amount, setAmount] = useState("");
  const [currencyType, setCurrencyType] = useState("SOL");
  const { transfer, transferToken } = useTransfer();

  const handlePayClick = () => {
    if (user === null) return;
    if (!amount || amount === "" || Number(amount) === 0) {
      Error("Please enter a valid amount");
      return;
    }

    if (currencyType === "SOL") {
      transfer(amount, user.pubkey);
    }

    if (currencyType === "USDC") {
      transferToken(amount, user.pubkey);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserByPubkey(currentContact);
      setUser(res);
    };

    if (currentContact) {
      console.log(currentContact);
      fetchUser();
    }
  }, [currentContact, isPopup]);

  return (
    isPopup && (
      <div className="absolute top-0 left-0 h-full w-full backdrop-filter backdrop-blur-lg z-20">
        <div className=" flex justify-center h-full items-center ">
          <div className="w-[668px] h-full px-[16px] py-[20px] flex items-center justify-center">
            <div
              className="w-full rounded-[8px] p-[0.5px]"
              style={{
                background:
                  "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
              }}
            >
              <div className={"h-full w-full rounded-[8px] bg-black "}>
                <Card
                  className={"h-full w-full rounded-[8px] bg-black pb-[5px]"}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none bg-black"
                  >
                    <div className="w-full">
                      <div className="flex flex-col-reverse w-full items-center justify-center">
                        <XMarkIcon
                          className="h-6 w-6 text-primary-white hover:cursor-pointer absolute top-0 right-0"
                          onClick={() => {
                            dispatch(togglePayPopup(false));
                            setUser(null);
                          }}
                        />

                        <div
                          className="p-[1px] w-full  rounded-[8px] z-0 -mt-[84px]"
                          style={{
                            background:
                              "linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)",
                          }}
                        >
                          <div
                            className={
                              "bg-black h-[180px] w-full rounded-[8px] flex flex-col items-center justify-center gap-[8px] relative " +
                              myFont.className
                            }
                          >
                            <h1 className="text-2xl font-bold text-center mt-[70px] text-transparent bg-gradient-to-r from-[#4aff93] to-[#26ffff] bg-clip-text">
                              <span className="text-primary-white bg-none">
                                Send Payment to{" "}
                              </span>{" "}
                              {user.firstName} {user.lastName}
                            </h1>

                            <div
                              className="rounded-full bg-[#1C1D22] text-white p-1 px-4 text-[12px] flex items-center justify-center hover:cursor-pointer"
                              onClick={() => {
                                navigator.clipboard.writeText(user.pubkey);
                                Success("Copied to clipboard");
                              }}
                            >
                              <h1 className="opacity-60">
                                {user.pubkey.substring(0, 4)}...
                                {user.pubkey.substring(
                                  user.pubkey.length - 4,
                                  user.pubkey.length
                                )}
                              </h1>
                              <DocumentDuplicateIcon className="h-[12px] w-[12px] inline-block ml-[5px] opacity-60" />
                            </div>
                          </div>
                        </div>
                        <div className="p-[1px] rounded-full relative bg-gradient-to-r from-[#4AFF93] to-[#26FFFF] z-10">
                          <div className="absolute bottom-0 h-[50%] w-full right-0 bg-black rounded-b-full"></div>
                          <div className="bg-black rounded-full p-[2px] relative ">
                            <Avatar
                              style={{ width: "10rem", height: "10rem" }}
                              {...genConfig(user.avatarId)}
                              className=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody className="p-4 flex flex-col w-full gap-[15px]">
                    <div className="flex gap-[8px]">
                      <div className="w-[65%]">
                        <Input
                          variant="outlined"
                          label="Enter Amount"
                          color="white"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>

                      <div className="w-[30%]">
                        <Select
                          label="Select Type"
                          className={
                            "border-b-white border-x-white text-white " +
                            myFont.className
                          }
                          labelProps={{
                            className:
                              "before:border-white after:border-white text-white",
                          }}
                          value={currencyType}
                          onChange={(e) => setCurrencyType(e)}
                        >
                          <Option value="SOL">SOL</Option>
                          <Option value="USDC">USDC</Option>
                        </Select>
                      </div>
                    </div>

                    <Button
                      className={
                        " bg-gradient-to-r from-[#26FFFF] to-[#4AFF93]  w-full flex flex-row  text-black items-center justify-center text-[14px] font-bold rounded-[8px]"
                      }
                      style={{
                        textTransform: "none",
                      }}
                      onClick={handlePayClick}
                    >
                      Send Payment
                      <span>
                        <RocketLaunchIcon className="h-4 w-4 ml-2 text-black" />
                      </span>
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
