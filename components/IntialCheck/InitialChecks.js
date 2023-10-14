"use client";

import useBalance from "@/hooks/useBalance";
import useGetServer from "@/hooks/useGetServer";
import useLiveGraph from "@/hooks/useLiveGraph";
import useLogin from "@/hooks/useLogin";
import useTransaction from "@/hooks/useTransaction";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function IntialChecks({ children }) {
  const { checkLogin } = useLogin();
  const { getUserSelf } = useGetServer();
  const mnemonics = useSelector((state) => state.wallet.mnemonics);
  const { balanceListener, getBalance, getBalanceUSDC } = useBalance();
  const connection = useSelector((state) => state.profile.connection);
  const { FetchWeekHistory } = useLiveGraph();
  const { getAllTransactions } = useTransaction();

  //Login Check
  useEffect(() => {
    checkLogin();
  }, []);

  //User Check
  useEffect(() => {
    if (mnemonics) {
      getUserSelf();
    }
  }, [mnemonics]);

  //Balance Check
  useEffect(() => {
    if (mnemonics) {
      getAllTransactions();
      getBalance();
      getBalanceUSDC();
      balanceListener();
    }
  }, [mnemonics, connection]);

  //Fetch Week Stats
  useEffect(() => {
    FetchWeekHistory();
  }, [mnemonics]);

  return <>{children}</>;
}
