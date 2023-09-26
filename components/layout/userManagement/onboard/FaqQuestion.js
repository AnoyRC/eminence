'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
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

const FaqQuestion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="mb-8">
      <Accordion
        className="flex flex-col items-center border-b-blue-red-700"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-primary-black text-base border-b border-b-primary-black/60"
        >
          What if I loose my security phrase / password?
        </AccordionHeader>

        <AccordionBody className="text-primary-black/80 px-2">
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
          className="text-primary-black text-base border-b border-b-primary-black/60"
        >
          If an agent asks you about your security phrase?
        </AccordionHeader>

        <AccordionBody className="text-primary-black/80 px-2">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </section>
  );
};

export default FaqQuestion;
