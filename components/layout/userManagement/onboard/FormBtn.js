'use client';

import useOnboard from '@/hooks/useOnboard';

import Button from '@/components/ui/Button';
import useToast from '@/hooks/useToast';

const GetStartedBtn = () => {
  const { step1 } = useOnboard();

  return (
    <div className="space-y-4 w-full max-w-xs">
      <Button
        label="Create New Wallet"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3 "
        onClick={step1.CreateWallet}
      />

      <Button
        label="Import your Wallet"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3"
        onClick={step1.importWallet}
      />
    </div>
  );
};

const SecurityPhaseBtn = () => {
  const { step2 } = useOnboard();

  return (
    <div className="space-y-4 w-full max-w-xs">
      <Button
        label="Continue"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3"
        onClick={step2.Continue}
      />
    </div>
  );
};

const ConfirmSecurityBtn = ({ inputMnemonic }) => {
  const { step3 } = useOnboard();

  const handleClick = (e) => {
    e.preventDefault();

    for (let i = 0; i < inputMnemonic.length; i++) {
      if (inputMnemonic[i] === '') {
        return;
      }
    }

    step3.ConfirmPhrase(inputMnemonic.join(' '));
  };

  return (
    <div className="w-full max-w-xs">
      <Button
        label="Confirm Security Phrase"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3 mb-1.5"
        onClick={handleClick}
      />

      <p className="text-primary-black text-sm font-medium text-center">
        Forgot Security Phase?{' '}
        <button
          className="underline underline-offset-4 font-bold transition-transform hover:scale-105"
          onClick={step3.Regenerate}
        >
          Generate New
        </button>
      </p>
    </div>
  );
};

const ConfirmPasswordBtn = ({ password, confirmPassword }) => {
  const { step4 } = useOnboard();
  const { Error } = useToast();

  const handleClick = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      step4.ConfirmPassword(password);
    }

    Error('Password not match');
  };

  return (
    <Button
      label="Confirm Password"
      fullWidth
      color="bg-primary-black text-primary-white"
      style="font-bold text-base rounded-lg py-3 mb-1.5"
      onClick={handleClick}
    />
  );
};

const FaqBtn = () => {
  const { step5 } = useOnboard();

  return (
    <Button
      label="Continue"
      fullWidth
      color="bg-primary-black text-primary-white"
      style="font-bold text-base rounded-lg py-3 mb-1.5"
      onClick={step5.Continue}
    />
  );
};

export {
  GetStartedBtn,
  SecurityPhaseBtn,
  ConfirmSecurityBtn,
  ConfirmPasswordBtn,
  FaqBtn,
};
