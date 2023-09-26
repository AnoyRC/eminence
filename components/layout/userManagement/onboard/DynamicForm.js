'use client';

import { useSelector } from 'react-redux';

import FormData_1 from '@/app/components/onBoard_1/contentBox/form/FormData_1';
import FormData_2 from '@/app/components/onBoard_1/contentBox/form/FormData_2';
import FormData_3 from '@/app/components/onBoard_1/contentBox/form/FormData_3';
import FormData_4 from '@/app/components/onBoard_1/contentBox/form/FormData_4';
import FormData_5 from '@/app/components/onBoard_1/contentBox/form/FormData_5';

import GetStarted from './steps/GetStarted';
import SecurityPhase from './steps/SecurityPhase';
import ConfirmSecurity from './steps/ConfirmSecurity';
import Password from './steps/SetPassword';
import Faq from './steps/Faq';

const DynamicForm = () => {
  const currentStep = useSelector((state) => state.default.currentStep);

  return (
    // <>
    //   {currentStep === 1 && <FormData_1 />}
    //   {currentStep === 2 && <FormData_2 />}
    //   {currentStep === 3 && <FormData_3 />}
    //   {currentStep === 4 && <FormData_4 />}
    //   {currentStep === 5 && <FormData_5 />}
    // </>

    <>
      {currentStep === 1 && <GetStarted />}
      {currentStep === 2 && <SecurityPhase />}
      {currentStep === 3 && <ConfirmSecurity />}
      {currentStep === 4 && <Password />}
      {currentStep === 5 && <Faq />}
    </>
  );
};
export default DynamicForm;
