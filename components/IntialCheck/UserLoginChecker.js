"use client";

import useGetServer from "@/hooks/useGetServer";
import useLogin from "@/hooks/useLogin";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserLoginCheck({ children }) {
  const { checkLogin } = useLogin();
  const { getUserSelf } = useGetServer();
  const mnemonics = useSelector((state) => state.wallet.mnemonics);

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (mnemonics) {
      getUserSelf();
    }
  }, [mnemonics]);

  return <>{children}</>;
}
