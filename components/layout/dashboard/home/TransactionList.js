"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";

const sampleData = [
  {
    name: "Gautam",
    date: "Aug 21, 2023 09:30 PM",
    id: "2EHbc...KjLKn",
    amount: "0.313",
    type: "credited",
    moneyType: "Sol",
    private: "true",
  },
  {
    name: "Gautam",
    date: "Aug 24, 2023 09:30 PM",
    id: "2EHbc...KjLKn",
    amount: "0.312",
    type: "debited",
    moneyType: "USDC",
    private: "true",
  },
  {
    name: "Gautam",
    date: "Aug 22, 2023 09:30 PM",
    id: "2EHbc...KjLKn",
    amount: "0.315",
    type: "credited",
    moneyType: "Sol",
    private: "false",
  },
];

const tableHeadings = ["name", "date", "id", "amount", "private"];

const parseMoneyType = (moneyType) => {
  if (moneyType === "Sol") {
    return " Sol";
  } else if (moneyType === "USDC") {
    return " USDC";
  }
  return "";
};

const parseType = (type) => {
  return type === "credited" ? "+" : "-";
};

const sortData = (data, columnIndex, isAscending) => {
  return data.slice().sort((a, b) => {
    if (columnIndex === 1) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return isAscending ? dateA - dateB : dateB - dateA;
    } else if (columnIndex === 3) {
      const amountA = parseFloat(a.amount);
      const amountB = parseFloat(b.amount);
      return isAscending ? amountA - amountB : amountB - amountA;
    }
    return 0;
  });
};

const TransactionList = () => {
  const [data, setData] = useState([]);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    const sortedData = [...sampleData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortedData);
  }, []);

  const handleSort = (columnIndex) => {
    if (columnIndex === 0 || columnIndex === 4 || columnIndex === 2) {
      return; // Do not sort for "name", "private", or "id"
    }

    const newIsAscending = columnIndex === sortedColumn ? !isAscending : true;
    const sortedData = sortData(data, columnIndex, newIsAscending);

    setData(sortedData);
    setSortedColumn(columnIndex);
    setIsAscending(newIsAscending);
  };
  return (
    <div className="w-full h-screen relative bg-primary-white flex items-center justify-center flex-col">
      <div className="container mx-auto p-4 w-[636px] bg-primary-black ">
        <h1 className="text-2xl text-primary-white font-bold mb-4">
          Transaction Details
        </h1>
        <div className="w-full bg-gradient-to-r from-[#4AFF93] to-[#26FFFF] rounded-lg p-1 ">
          <div className="grid grid-cols-5 pl-[20px] bg-primary-black w-full h-full rounded-lg">
            {tableHeadings.map((heading, index) => (
              <div
                key={heading}
                onClick={() => handleSort(index)}
                className={`py-4 text-[#f0f0f099] font-medium cursor-pointer ${
                  (index === 0 || index === 4 || index === 2) &&
                  "pointer-events-none"
                } ${
                  index === 3 || index === 4 ? "pl-[30px]" : ""
                } border-b border-[#f0f0f099]`}
              >
                <div className="flex items-center ">
                  <span>
                    {index === 2
                      ? `Transaction ${
                          heading.charAt(0).toUpperCase() + heading.slice(1)
                        }`
                      : heading.charAt(0).toUpperCase() + heading.slice(1)}
                  </span>
                  {index === 1 || index === 3 ? (
                    <span className="ml-2">
                      <ArrowsUpDownIcon className="text-[#f0f0f099] h-[12px] w-[12px]" />
                    </span>
                  ) : null}
                </div>
              </div>
            ))}

            {data && data.length > 0 ? (
              data.map((rowData, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {tableHeadings.map((heading, headingIndex) => (
                    <div
                      key={`${rowIndex}-${headingIndex}`}
                      className={` py-4 text-[14px] font-medium text-primary-white ${
                        headingIndex === 1 ? "break-words" : ""
                      } ${
                        headingIndex === 3 || headingIndex === 4
                          ? "pl-[30px]"
                          : ""
                      }`}
                    >
                      {headingIndex === 1 ? (
                        <h1>
                          {rowData.date.split(" ").slice(0, 3).join(" ")}
                          <br />
                          <p className="text-[10px] font-medium text-[#f0f0f099]">
                            {rowData.date.split(" ").slice(3).join(" ")}
                          </p>
                        </h1>
                      ) : headingIndex === 3 ? (
                        <h1
                          className={`text-[14px] font-medium  ${
                            rowData.type === "credited"
                              ? "text-primary"
                              : "text-[#DF0000]"
                          }`}
                        >
                          {`${parseType(rowData.type)}${
                            rowData.amount.split(".")[0]
                          }`}
                          <span className="text-[12px]">{`.${
                            rowData.amount.split(".")[1]
                          }`}</span>
                          <span className="text-primary-white">
                            {parseMoneyType(rowData.moneyType)}{" "}
                          </span>
                        </h1>
                      ) : headingIndex === 4 ? (
                        <div className="flex items-center">
                          <div
                            className={`w-[16px] h-[16px] bg-gradient-to-r from-[#4AFF93] to-[#26FFFF] rounded-sm ${
                              rowData.private === "true"
                                ? "flex flex-row justify-center"
                                : "p-[1px]"
                            }`}
                          >
                            {rowData.private === "true" ? (
                              <Image
                                src="/images/checkbox-tick.svg"
                                width={12}
                                height={12}
                                alt="checkbox-tick"
                                className="prevent-select"
                              />
                            ) : (
                              <div className="bg-primary-black h-full rounded-sm"></div>
                            )}
                          </div>
                        </div>
                      ) : (
                        rowData[heading]
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <div className="col-span-5 text-white py-4 text-center">
                No data available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
