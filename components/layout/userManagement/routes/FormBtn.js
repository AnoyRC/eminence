"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import useOnboard from "@/hooks/useOnboard";

import Button from "@/components/ui/Button";
import useCreateWallet from "@/hooks/useCreateWallet";
import useToast from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { setMnemonics } from "@/redux/walletSlice";
import usePostServer from "@/hooks/usePostServer";

const PublicProfileBtn = () => {
  const router = useRouter();
  const { createUserRandom } = usePostServer();

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
        <button
          className="underline underline-offset-4 font-bold transition-transform hover:scale-105"
          onClick={async (e) => {
            e.preventDefault();
            await createUserRandom();
          }}
        >
          Skip for Now
        </button>
      </p>
    </div>
  );
};

const EminentBtn = ({ firstName, lastName, avatarId }) => {
  const { createUser } = usePostServer();

  const handleClick = async () => {
    await createUser({ firstName, lastName, avatarId });
  };

  return (
    <Button
      label="Create Profile"
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

const NewPasswordBtn = ({ password, confirmPassword }) => {
  const router = useRouter();
  const { step4 } = useOnboard();
  const { Error } = useToast();
  const { generateToken } = usePostServer();
  const { signMessage } = useCreateWallet();

  const handleClick = async (e) => {
    e.preventDefault();

    if (
      password.current.value.length === 0 ||
      confirmPassword.current.value.length === 0
    ) {
      Error("Please fill all the fields");
      return;
    }

    if (password.current.value === confirmPassword.current.value) {
      try {
        const signature = await signMessage();

        await generateToken(signature);

        step4.ConfirmPassword(password.current.value);

        router.push("/dashboard");

        return;
      } catch (err) {
        Error("Something went wrong");
      }
    }
    Error("Password do not match");
  };

  return (
    <Button
      label="Continue"
      fullWidth
      color="bg-primary-black text-primary-white"
      style="font-bold text-base rounded-lg py-3 mb-1.5 max-w-xs"
      onClick={(e) => handleClick(e)}
    />
  );
};

const ImportWalletBtn = ({ inputMnemonic }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { Error } = useToast();

  const handleClick = () => {
    if (inputMnemonic.length !== 12) {
      Error("Please fill all the fields");
      return;
    }

    const mnemonic = inputMnemonic.join(" ");

    dispatch(setMnemonics(mnemonic));
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
