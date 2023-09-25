'use client';
import FormData_1 from './form/FormData_1';
import Image from 'next/image';
import FormData_2 from './form/FormData_2';
import FormData_3 from './form/FormData_3';
import FormData_4 from './form/FormData_4';
import FormData_5 from './form/FormData_5';
import { useSelector } from 'react-redux';

export default function Form() {
  const currentStep = useSelector((state) => state.default.currentStep);
  return (
    <div className="mt-[48px] relative">
      <Image
        src="/images/OnBoard_1/ContentBox/Form/Circle.svg"
        width={165}
        height={165}
        alt="Circle"
        className="absolute -right-32 top-2"
      />

      <div
        className="rounded-lg overflow-hidden relative"
        style={{
          background: 'linear-gradient(225deg, #49E9FF 0%, #40FF8D 100%)',
          boxShadow: '0px 4px 36px 36px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className="w-[425px] h-[425px] rounded-[425px] bg-[#6FFF8F] absolute -top-36 -right-36 z-0"></div>

        <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff66] backdrop-blur-[100px]"></div>

        <div className="w-[542px] h-[542px] rounded-[542px] bg-[#CEFFF9] absolute -bottom-72 -right-[440px] z-10"></div>

        <div className="py-[40px] px-[60px] relative z-10">
          {currentStep === 1 && <FormData_1 />}
          {currentStep === 2 && <FormData_2 />}
          {currentStep === 3 && <FormData_3 />}
          {currentStep === 4 && <FormData_4 />}
          {currentStep === 5 && <FormData_5 />}
        </div>
      </div>

      <Image
        src="/images/OnBoard_1/ContentBox/Form/Asterisk.svg"
        width={165}
        height={165}
        alt="Asterisk"
        className="absolute -left-24 -bottom-12"
      />
    </div>
  );
}
