"use client";

import useToast from "./useToast";
import { useSelector } from "react-redux";
import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as bip39 from "bip39";
import { sendAndConfirmTransaction } from "@solana/web3.js";
import {
  getOrCreateAssociatedTokenAccount,
  transfer as tokenTransfer,
} from "@solana/spl-token";

export default function useTransfer() {
  const { Success, Error } = useToast();
  const cluster = useSelector((state) => state.profile.connection);
  const mnemonics = useSelector((state) => state.wallet.mnemonics);

  const transfer = async (amount, to) => {
    try {
      const seed = bip39.mnemonicToSeedSync(mnemonics);
      const keypair = Keypair.fromSeed(seed.slice(0, 32));

      const connection = new Connection(cluster, "confirmed");

      const toPubKey = new PublicKey(to.toString());

      const amountInLamports = amount * LAMPORTS_PER_SOL;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: keypair.publicKey,
          toPubkey: toPubKey,
          lamports: amountInLamports,
        })
      );
      transaction.feePayer = keypair.publicKey;

      let txHash = await sendAndConfirmTransaction(connection, transaction, [
        keypair,
      ]);

      Success(
        "Transaction Success with Hash: " +
          txHash.toString().substring(0, 5) +
          "..." +
          txHash
            .toString()
            .substring(txHash.toString().length - 5, txHash.toString().length)
      );
      return true;
    } catch (err) {
      Error("Transaction Failed");
      console.log(err);
      return false;
    }
  };

  const transferToken = async (amount, to) => {
    try {
      const tokenAddress = new PublicKey(
        cluster === "https://api.devnet.solana.com"
          ? "F3hocsFVHrdTBG2yEHwnJHAJo4rZfnSwPg8d5nVMNKYE"
          : "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
      );

      const connection = new Connection(cluster, "confirmed");

      const seed = bip39.mnemonicToSeedSync(mnemonics);
      const keypair = Keypair.fromSeed(seed.slice(0, 32));

      const toWallet = new PublicKey(to.toString());

      const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        tokenAddress,
        keypair.publicKey,
        undefined,
        "finalized"
      );

      const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        tokenAddress,
        toWallet
      );

      const amountInLamports = amount * Math.pow(10, 6);

      const signature = await tokenTransfer(
        connection,
        keypair,
        fromTokenAccount.address,
        toTokenAccount.address,
        keypair.publicKey,
        amountInLamports
      );

      Success(
        "Transaction Success with Signature: " +
          signature.toString().substring(0, 5) +
          "..." +
          signature
            .toString()
            .substring(
              signature.toString().length - 5,
              signature.toString().length
            )
      );
      return true;
    } catch (err) {
      console.log(err);
      Error("Transaction Failed");
      return false;
    }
  };

  return { transfer, transferToken };
}
