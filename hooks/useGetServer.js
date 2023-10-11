'use client';
import axios from 'axios';
import useToast from './useToast';
import { useDispatch, useSelector } from 'react-redux';
import { Keypair } from '@solana/web3.js';
import { setUser } from '@/redux/profileSlice';
import { useRouter } from 'next/navigation';
import * as bip39 from 'bip39';
import useCreateWallet from './useCreateWallet';
import usePostServer from './usePostServer';
import { setUserContacts } from '@/redux/profileSlice';

export default function useGetServer() {
  const { Error } = useToast();
  const mnemonics = useSelector((state) => state.wallet.mnemonics);
  const dispatch = useDispatch();
  const router = useRouter();
  const { signMessage } = useCreateWallet();
  const { generateToken } = usePostServer();

  const getUserSelf = async () => {
    const seed = bip39.mnemonicToSeedSync(mnemonics);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));

    const signature = await signMessage();

    await generateToken(signature);

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
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/user/info`,
        { headers }
      );

      dispatch(setUser(res.data));
    } catch (err) {
      router.push('/publicProfile');
      Error('User Not Found');
    }
  };

  const getUserContacts = async () => {
    const seed = bip39.mnemonicToSeedSync(mnemonics);
    const keypair = Keypair.fromSeed(seed.slice(0, 32));

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
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/user/contacts`,
        { headers }
      );

      console.log(res.data);

      dispatch(setUserContacts(res.data));
      return res.data;
    } catch (err) {
      Error('Something Went Wrong');
    }
  };

  return { getUserSelf, getUserContacts };
}
