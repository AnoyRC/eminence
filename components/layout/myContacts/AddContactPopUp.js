"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
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
import ContactTabSearch from "./ContactTabSearch";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "@/redux/contactsSlice";

const myFont = localFont({
  src: "../../../public/fonts/Satoshi-Variable.woff2",
});

const contacts = [
  { name: "Sourabh" },
  { name: "Gautam Raj" },
  { name: "Anoy" },
  { name: "Pratik" },
];

export default function AddContactPopUp() {
  const dispatch = useDispatch();
  const isPopup = useSelector((state) => state.contacts.isPopup);
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
              <div className={"h-full w-full rounded-[8px] bg- "}>
                <Card
                  className={"h-full w-full rounded-[8px] bg-black pb-[5px]"}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none bg-black"
                  >
                    <div className=" flex flex-col justify-between gap-8 pb-1 relative">
                      <div>
                        <Typography
                          variant="h2"
                          color="white"
                          className={myFont.className}
                        >
                          Add Contact
                        </Typography>
                        <Typography
                          color="white"
                          variant=""
                          className={"mt-1 font-normal " + myFont.className}
                        >
                          Add a new contact to your list
                        </Typography>
                      </div>
                      <XMarkIcon
                        className="h-6 w-6 text-white hover:cursor-pointer absolute top-0 right-0"
                        onClick={() => dispatch(togglePopup(false))}
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="p-4 flex flex-col w-full gap-[15px]">
                    <div className="flex gap-[8px]">
                      <div className="w-[65%]">
                        <Input
                          variant="outlined"
                          label="Search"
                          color="white"
                          icon={
                            <MagnifyingGlassIcon
                              className={"text-white " + myFont.className}
                            />
                          }
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
                        >
                          <Option>User Name</Option>
                          <Option>Address</Option>
                        </Select>
                      </div>
                    </div>
                    <Button
                      className={
                        " bg-gradient-to-r from-[#26FFFF] to-[#4AFF93]  w-full flex flex-row  text-black items-center justify-center text-[14px] font-bold rounded-[8px] " +
                        myFont.className
                      }
                      href=""
                      style={{
                        textTransform: "none",
                      }}
                    >
                      Search Contact
                      <span>
                        <MagnifyingGlassIcon className="h-4 w-4 ml-2 text-black" />
                      </span>
                    </Button>
                    {contacts.length > 0 && (
                      <Typography
                        variant="h2"
                        color="white"
                        className={myFont.className}
                      >
                        Results
                      </Typography>
                    )}
                    {contacts.length > 0 &&
                      contacts.map((contact) => (
                        <ContactTabSearch
                          key={contact.name}
                          name={contact.name}
                        />
                      ))}
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
