"use client";
import FormButton from "./formData/FormButton";
import useOnboard from "@/hooks/useOnboard";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function FormData_5() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const { step5 } = useOnboard();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Frequently Asked Questions
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Find answers to common questions and concerns <br /> about Eminence
        Wallet's security and functionality in <br /> this section.
      </p>
      <Accordion
        className="flex flex-col items-center"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-primary-black text-[16px] max-w-[320px]"
        >
          What if I loose my security phrase / password?
        </AccordionHeader>
        <AccordionBody className="max-w-[380px]">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="flex flex-col items-center"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-primary-black text-[16px] max-w-[320px]"
        >
          If an agent asks you about your security phrase?
        </AccordionHeader>
        <AccordionBody className="max-w-[380px]">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <FormButton
        className="mt-[40px]"
        text="Continue"
        onClick={step5.Continue}
      />
    </div>
  );
}
