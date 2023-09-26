'use client';

import { ConfirmPasswordBtn } from './FormBtn';

const SetPasswordInput = () => {
  const password = useRef(null);
  const confirmPassword = useRef(null);

  return (
    <>
      <input
        type="password"
        ref={password}
        className="w-full mb-5 rounded px-8 py-3 bg-primary-white/60 text-primary-black font-medium text-base"
        placeholder="Enter Password"
      />
      <input
        type="password"
        ref={confirmPassword}
        className="w-full rounded px-8 py-3 bg-primary-white/60 text-primary-black font-medium text-base"
        placeholder="Confirm Password"
      />

      <ConfirmPasswordBtn
        password={password.current.value}
        confirmPassword={confirmPassword.current.value}
      />
    </>
  );
};

export default SetPasswordInput;
