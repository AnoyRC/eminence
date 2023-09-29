"use client";

import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import { useDispatch, useSelector } from "react-redux";
import { setMnemonics, setPubKey } from "@/redux/walletSlice";
import forge, { random, pki } from "node-forge";
import useToast from "./useToast";

export default function useCreateWallet() {
  const dispatch = useDispatch();
  const mnemonic = useSelector((state) => state.wallet.mnemonics);
  const { Error, Success } = useToast();

  const createWallet = () => {
    const mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));
    dispatch(setMnemonics(mnemonic));
    dispatch(setPubKey(keypair.publicKey.toString()));
  };

  const importWallet = (mnemonic) => {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));
    dispatch(setMnemonics(mnemonic));
    dispatch(setPubKey(keypair.publicKey.toString()));
  };

  const saveToLocalStorage = (password) => {
    forge.pkcs5.pbkdf2(
      password,
      "Eminence",
      20000,
      24,
      function (err, derivedKey) {
        let iv = forge.random.getBytesSync(16);

        const message = mnemonic;
        let cipher = forge.cipher.createCipher("AES-CBC", derivedKey);
        cipher.start({ iv: iv });
        cipher.update(forge.util.createBuffer(message));
        cipher.finish();
        const encrypted = cipher.output;

        //Store Encrypted Mnemonic in localStorage
        localStorage.setItem(
          "secret",
          forge.util.createBuffer(iv).toHex() + encrypted.toHex()
        );
      }
    );
  };

  const retrieveFromLocalStorage = (password) => {
    //Create RSA Key from Password
    const encrypted = localStorage.getItem("secret");
    const iv = forge.util.createBuffer(
      Buffer.from(encrypted.slice(0, 32), "hex")
    );
    const message = forge.util.createBuffer(
      Buffer.from(encrypted.slice(32), "hex")
    );

    forge.pkcs5.pbkdf2(
      password,
      "Eminence",
      20000,
      24,
      function (err, derivedKey) {
        let decipher = forge.cipher.createDecipher("AES-CBC", derivedKey);
        decipher.start({ iv: iv });
        decipher.update(message);
        decipher.finish();
        //Import Wallet
        importWallet(decipher.output.toString());
        Success("Welcome to Eminence");
      }
    );
  };

  return {
    createWallet,
    importWallet,
    saveToLocalStorage,
    retrieveFromLocalStorage,
  };
}
