'use client';

import { useEffect, useState } from 'react';
import useGetServer from '@/hooks/useGetServer';

import ProfilePay from '@/components/layout/profile/payment/ProfilePay';
import CardContainer from '@/components/layout/profile/userProfile/CardContainer';

const page = ({ params }) => {
  const [user, setUser] = useState(null);

  const { getUserByPubkey } = useGetServer();

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserByPubkey(params.userId);
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <div className="w-screen h-screen bg-primary-black">
      <div className=" flex flex-row gap-20 mx-auto h-full justify-center items-center">
        <CardContainer user={user} />

        <ProfilePay user={user} />
      </div>
    </div>
  );
};

export default page;
