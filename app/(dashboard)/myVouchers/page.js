"use client";

import { useState, useEffect } from "react";

import Voucher from "@/components/layout/myVouchers/Voucher";
import VoucherEditor from "@/components/layout/myVouchers/VoucherEditor";
import Button from "@/components/ui/Button";

import { generateRandomString } from "@/components/layout/userManagement/routes/eminent/generateRandomString";
import useToast from "@/hooks/useToast";
import usePostServer from "@/hooks/usePostServer";
import useVoucher from "@/hooks/useVoucher";

export default function Home() {
  const { Success, Error } = useToast();
  const [amount, setAmount] = useState(0.0);
  const [message, setMessage] = useState(
    "Your Custom message for the receiver. The maximum character you can store is 100."
  );
  const [password, setPassword] = useState("");
  const [voucherId, setVoucherId] = useState("");
  const { createVoucher } = usePostServer();
  const { createVoucherWeb3 } = useVoucher();

  const handleChange = (e) => {
    if (e === "") setAmount(0.0);
    const regex = new RegExp("^[0-9]*[.]{0,1}[0-9]{0,2}$");
    if (regex.test(e)) setAmount(e);
  };

  const handleCreateVoucher = async () => {
    if (amount <= 0) {
      Error("Please enter amount");
      return;
    }

    if (!password || password.length === 0) {
      Error("Please enter password");
      return;
    }

    if (password.length > 8) {
      Error("Password must be less than 8 characters");
    }

    const response = await createVoucherWeb3(amount, voucherId, password);

    if (!response) return;

    const res = await createVoucher(amount, message, voucherId);

    if (!res) return;

    setAmount(0);
    setMessage(
      "Your Custom message for the receiver. The maximum character you can store is 100."
    );
    setPassword("");
    setVoucherId(generateRandomString(10));
  };

  useEffect(() => {
    setVoucherId(generateRandomString(10));
  }, []);

  return (
    <section className="w-full h-full flex flex-col gap-5">
      <Voucher amount={amount} message={message} />

      <VoucherEditor
        amount={amount}
        message={message}
        password={password}
        voucherId={voucherId}
        setAmount={handleChange}
        setMessage={setMessage}
        setPassword={setPassword}
      />

      <Button
        label="Create Voucher"
        rounded
        fullWidth
        color={"bg-gradient-priamry"}
        style={"font-bold py-2 mt-3"}
        onClick={handleCreateVoucher}
      />
    </section>
  );
}
