"use client";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  Checkbox,
} from "@material-tailwind/react";
import localFont from "next/font/local";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const myFont = localFont({
  src: "../../../../public/fonts/Satoshi-Variable.woff2",
});

import Avatar, { genConfig } from "react-nice-avatar";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Name", "Amount", "Date", "Type", "Private"];

const TABLE_ROWS = [
  {
    avatarId: "anoy",
    name: "Anoy",
    pubKey: "FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM",
    amount: "- 25 Sol",
    date: 1696331258566,
    type: "send",
    isPrivate: true,
  },
  {
    avatarId: "gautam",
    name: "Gautam",
    pubKey: "FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM",
    amount: "+ 25 Sol",
    date: 1696331258566,
    type: "receive",
    isPrivate: false,
  },
  {
    avatarId: "Sikari",
    name: "Sikari",
    pubKey: "FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM",
    amount: "- 25 Sol",
    date: 1696331258566,
    type: "swap",
    isPrivate: false,
  },
  {
    avatarId: "Pratik",
    name: "Pratik",
    pubKey: "FdK7Kuaa6Qao1PQH9mMPYgvEKeC2jAViM67skuAcV1iM",
    amount: "- 25 Sol",
    date: 1696331258566,
    type: "voucher",
    isPrivate: false,
  },
];

export default function TransactionV2() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="h-full w-full rounded-[8px] p-[0.5px]"
      style={{
        background: "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
      }}
    >
      <Card className={"h-full w-full rounded-[8px] bg-black"}>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-black"
        >
          <div className=" flex flex-col justify-between gap-8 pb-1">
            <div>
              <Typography
                variant="h5"
                color="white"
                className={myFont.className}
              >
                Cash Out Transactions
              </Typography>
              <Typography
                color="white"
                className={"mt-1 font-normal " + myFont.className}
              >
                These are details about the last transactions
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-2 px-0">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="border-y border-white bg-[#1C1D22] p-4 hover:bg-[#1C1D22]/50 cursor-pointer"
                  >
                    <Typography
                      variant="small"
                      color="white"
                      className={
                        "flex items-center justify-between font-normal leading-none opacity-70 " +
                        myFont.className
                      }
                    >
                      {head}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ avatarId, name, amount, date, type, isPrivate }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            style={{ width: "2rem", height: "2rem" }}
                            {...genConfig(avatarId)}
                            className=""
                          />
                          <Typography
                            variant="small"
                            color="white"
                            className={"font-bold " + myFont.className}
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="white"
                          className={"font-normal " + myFont.className}
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        {isClient && (
                          <Typography
                            variant="small"
                            color="white"
                            className={"font-normal  " + myFont.className}
                          >
                            {new Date(date).getDate() +
                              " " +
                              new Date(date).toLocaleString("default", {
                                month: "long",
                              }) +
                              " " +
                              new Date(date).getFullYear()}
                          </Typography>
                        )}
                        {isClient && (
                          <Typography
                            variant="small"
                            color="white"
                            className={"font-normal  " + myFont.className}
                          >
                            {new Date(date).toLocaleTimeString()}
                          </Typography>
                        )}
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="filled"
                            value={type}
                            color={
                              type === "receive"
                                ? "green"
                                : type === "send"
                                ? "red"
                                : type === "swap"
                                ? "blue"
                                : "orange"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3 [&>*]:opacity-100">
                          <Checkbox
                            className="opacity-100"
                            defaultChecked={isPrivate}
                            containerProps={{
                              className:
                                "checked:[&>*]:border-none checked:[&>*]:bg-gradient-to-r checked:[&>*]:from-[#26FFFF] checked:[&>*]:to-[#4AFF93] [&>*]:text-black [&>*]:rounded-md",
                            }}
                            labelProps={{
                              className: "opacity-100",
                            }}
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
