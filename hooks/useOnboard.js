"use client";
import { next, previous } from "@/redux/defaultSlice";
import { useDispatch, useSelector } from "react-redux";
import useCreateWallet from "./useCreateWallet";
import { useRouter } from "next/navigation";

export default function useOnboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { createWallet, saveToLocalStorage } = useCreateWallet();
  const mnemonic = useSelector((state) => state.wallet.mnemonics);

  const step1 = {
    CreateWallet: () => {
      createWallet();
      dispatch(next());
    },
    importWallet: () => {
      router.push("/import");
    },
  };

  const step2 = {
    Continue: () => {
      dispatch(next());
    },
  };

  const step3 = {
    ConfirmPhrase: (inputMnemonic) => {
      if (inputMnemonic === mnemonic) {
        dispatch(next());
      }
    },
    Regenerate: () => {
      createWallet();
      dispatch(previous());
    },
  };

  const step4 = {
    ConfirmPassword: (password) => {
      saveToLocalStorage(password);
      dispatch(next());
    },
  };

  const step5 = {
    Continue: () => {
      router.push("/welcome");
    },
  };

  return {
    step1,
    step2,
    step3,
    step4,
    step5,
  };
}
