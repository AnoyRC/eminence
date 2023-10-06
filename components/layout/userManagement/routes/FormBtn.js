"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import useOnboard from "@/hooks/useOnboard";

import Button from "@/components/ui/Button";
import useCreateWallet from "@/hooks/useCreateWallet";
import useToast from "@/hooks/useToast";
import { togglePopup } from "@/redux/checkLoginSlice";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "@/hooks/useLogin";

const PublicProfileBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/createEminent");
  };

  return (
    <div className="w-full max-w-xs">
      <Button
        label="Be an Eminent"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3 mb-1.5"
        onClick={handleClick}
      />

      <p className="text-primary-black text-sm font-medium text-center">
        Don&apos;t want a public profile?{" "}
        <Link
          className="underline underline-offset-4 font-bold transition-transform hover:scale-105"
          href={"/dashboard"}
        >
          Skip for Now
        </Link>
      </p>
    </div>
  );
};

const EminentBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <Button
      label="Continue"
      fullWidth
      color="bg-primary-black text-primary-white"
      style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
      onClick={handleClick}
    />
  );
};

const ForgotBtn = () => {
  const router = useRouter();
  const { step1 } = useOnboard();

  const handleContinueClick = () => {
    router.push("/importWallet");
  };

  const handleNewAccountClick = () => {
    step1.CreateWallet;
    router.push("/onboard");
  };

  return (
    <>
      <Button
        label="Continue"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
        onClick={handleContinueClick}
      />

      <Button
        label="Create New Account"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
        onClick={handleNewAccountClick}
      />

      <p className="text-primary-black text-sm font-medium text-center">
        Remember Password?{" "}
        <Link
          className="underline underline-offset-4 font-bold transition-transform hover:scale-105"
          href={"/welcome"}
        >
          Go back
        </Link>
      </p>
    </>
  );
};

const WelcomeBtn = ({ password }) => {
  const router = useRouter();
  const { retrieveFromLocalStorage } = useCreateWallet();
  const { Error, Success } = useToast();
  const mnemonic = useSelector((state) => state.wallet.mnemonics);

  const handleClick = async () => {
    if (password.length === 0) {
      Error("Please enter a password");
      return;
    }
    await retrieveFromLocalStorage(password, false);
  };

  return (
    <>
      <Button
        label="Unlock"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
        onClick={handleClick}
      />

      <p className="text-primary-black text-sm font-medium text-center">
        Forgot Password?{" "}
        <Link
          className="underline underline-offset-4 font-bold transition-transform hover:scale-105"
          href={"/forgotPassword"}
        >
          Generate New
        </Link>
      </p>
    </>
  );
};

const CheckLoginBtn = ({ password }) => {
  const dispatch = useDispatch();
  const { retrieveFromLocalStorage } = useCreateWallet();
  const { Error, Success } = useToast();

  const handleClick = async () => {
    if (password.length === 0) {
      Error("Please enter a password");
      return;
    }

    retrieveFromLocalStorage(password, true);
  };

  return (
    <>
      <Button
        label="Unlock"
        fullWidth
        color="bg-primary-black text-primary-white"
        style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
        onClick={async () => await handleClick()}
      />

      <p className="text-primary-black text-sm font-medium text-center">
        Forgot Password?{" "}
        <Link
          className="underline underline-offset-4 font-bold transition-transform hover:scale-105"
          href={"/forgotPassword"}
        >
          Generate New
        </Link>
      </p>
    </>
  );
};

const NewPasswordBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <Button
      label="Continue"
      fullWidth
      color="bg-primary-black text-primary-white"
      style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
      onClick={handleClick}
    />
  );
};

const ImportWalletBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/newPassword");
  };

  return (
    <Button
      label="Confirm Security Phrase"
      fullWidth
      color="bg-primary-black text-primary-white"
      style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
      onClick={handleClick}
    />
  );
};

export {
  PublicProfileBtn,
  EminentBtn,
  ForgotBtn,
  WelcomeBtn,
  NewPasswordBtn,
  ImportWalletBtn,
  CheckLoginBtn,
};
