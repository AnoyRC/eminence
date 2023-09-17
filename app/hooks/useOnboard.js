"use client";
import { next, previous } from "@/redux/defaultSlice";
import { useDispatch } from "react-redux";

export default function useOnboard() {
  const dispatch = useDispatch();

  const step1 = {
    CreateWallet: () => {
      dispatch(next());
    },
    importWallet: () => {},
  };

  const step2 = {
    Continue: () => {
      dispatch(next());
    },
  };

  const step3 = {
    ConfirmPhrase: () => {
      dispatch(next());
    },
    Regenerate: () => {
      dispatch(previous());
    },
  };

  const step4 = {
    ConfirmPassword: () => {
      dispatch(next());
    },
  };

  return {
    step1,
    step2,
    step3,
    step4,
  };
}
