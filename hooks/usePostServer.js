'use client';

import axios from 'axios';
import useToast from './useToast';
import { useDispatch, useSelector } from 'react-redux';
import { Keypair } from '@solana/web3.js';
import * as bip39 from 'bip39';
import nacl from 'tweetnacl-sealed-box';
import bs58 from 'bs58';
import { setUser } from '@/redux/profileSlice';
import { useRouter } from 'next/navigation';
import { addMessage, setChatId } from '@/redux/contactSlice';

export default function usePostServer() {
  const { Error, Success } = useToast();
  const mnemonics = useSelector((state) => state.wallet.mnemonics);
  const dispatch = useDispatch();
  const router = useRouter();

  const generateToken = async (signature) => {
    try {
      const data = { signature };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/auth`,
        data
      );
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      Error('Something went wrong');
    }
  };

  const createUser = async ({ firstName, lastName, avatarId }) => {
    const seed = bip39.mnemonicToSeedSync(mnemonics);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));

    const keys = nacl.box.keyPair.fromSecretKey(keypair.secretKey.slice(0, 32));

    const data = {
      chatPubkey: bs58.encode(keys.publicKey),
      firstName,
      lastName,
      avatarId,
      cardColor: 'black',
    };

    const token = localStorage.getItem('token');

    if (!token) {
      Error('Please Login');
      router.push('/login');
      return;
    }

    const headers = {
      'x-auth-token': token,
      'x-auth-pubkey': keypair.publicKey.toString(),
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/user/create`,
        data,
        { headers }
      );
      dispatch(setUser(res.data));
      router.push('/dashboard');
      Success('User Successfully Created');
    } catch (err) {
      console.log(err);
      Error('Something went wrong');
    }
  };

  const createUserRandom = async () => {
    const randomNumber = Math.floor(Math.random() * 1000);

    await createUser({
      firstName: 'Eminence',
      lastName: `User-${randomNumber}`,
      avatarId: `avatar-${randomNumber}`,
    });
  };

  const createChat = async (pubkey) => {
    const seed = bip39.mnemonicToSeedSync(mnemonics);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));

    const token = localStorage.getItem('token');

    if (!token) {
      Error('Please Login');
      router.push('/login');
      return;
    }

    const body = {
      userId: pubkey,
    };

    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token': token,
      'x-auth-pubkey': keypair.publicKey.toString(),
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/chat`,
        body,
        { headers }
      );

      dispatch(setChatId(res.data));
    } catch (err) {
      console.log(err);
      Error('Something went wrong');
    }
  };

  const createMessage = async (type, chatId, message) => {
    const seed = bip39.mnemonicToSeedSync(mnemonics);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));

    const token = localStorage.getItem('token');

    if (!token) {
      Error('Please Login');
      router.push('/login');
      return;
    }

    const body = {
      type,
      chatId,
      message,
    };

    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token': token,
      'x-auth-pubkey': keypair.publicKey.toString(),
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/message`,
        body,
        { headers }
      );

      dispatch(addMessage(res.data));
    } catch (err) {
      console.log(err);
      Error('Something went wrong');
    }
  };

  return {
    generateToken,
    createUser,
    createUserRandom,
    createChat,
    createMessage,
  };
}
