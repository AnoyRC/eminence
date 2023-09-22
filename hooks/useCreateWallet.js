"use client";

import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import { useDispatch, useSelector } from "react-redux";
import { setMnemonics, setPubKey } from "@/redux/walletSlice";
import forge, { random, pki } from "node-forge";

export default function useCreateWallet() {
  const dispatch = useDispatch();
  const mnemonic = useSelector((state) => state.wallet.mnemonics);

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
    const prng = random.createInstance();
    const md = forge.md.sha256.create();
    md.update(password);

    //Deterministic Key from Password
    prng.seedFileSync = () => md.digest().toHex();
    const { privateKey, publicKey } = pki.rsa.generateKeyPair({
      bits: 512,
      prng,
      workers: -1,
    });

    //Chunk 1 of Mnemonic
    const chunk1 = mnemonic.slice(0, 35);
    const encrypted1 = publicKey.encrypt(chunk1);

    //Chunk 2 of Mnemonic
    const chunk2 = mnemonic.slice(35, mnemonic.length);
    const encrypted2 = publicKey.encrypt(chunk2);

    //Store Encrypted Mnemonic in localStorage
    localStorage.setItem("secretPair", `${encrypted1}---${encrypted2}`);
  };

  const retrieveFromLocalStorage = (password) => {
    //Create RSA Key from Password
    const prng = random.createInstance();
    const md = forge.md.sha256.create();
    md.update(password);

    prng.seedFileSync = () => md.digest().toHex();
    const { privateKey } = pki.rsa.generateKeyPair({
      bits: 512,
      prng,
    });

    //Get Encrypted Mnemonic from localStorage
    const secretPair = localStorage.getItem("secretPair");

    //Decrypt Encrypted Mnemonic with RSA Private Key
    const encrypted1 = secretPair.split("---")[0];
    const encrypted2 = secretPair.split("---")[1];
    const decrypted1 = privateKey.decrypt(encrypted1);
    const decrypted2 = privateKey.decrypt(encrypted2);
    const mnemonic = decrypted1 + decrypted2;

    //Import Wallet
    importWallet(mnemonic);
  };

  return {
    createWallet,
    importWallet,
    saveToLocalStorage,
    retrieveFromLocalStorage,
  };
}
