'use client';

import { useEffect, useState } from 'react';

import ProfileAvatar from '@/components/ui/ProfileAvatar';

const ContactList = ({ pubKey }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/user/info/${pubKey}`
      );
      const data = await res.json();

      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-primary-black px-3 py-2 w-full rounded-lg flex justify-between items-center">
      {user ? (
        <>
          <div className="relative flex items-center">
            <ProfileAvatar
              style={{ width: '2rem', height: '2rem' }}
              id={user?.avatarId}
              classname={'mr-3'}
            />

            <p className="text-sm text-primary-white font-medium">
              {user?.firstName + ' ' + user?.lastName}
            </p>
          </div>

          <div
            className={` w-[10px] h-[10px] rounded-full ${
              status === 'online' ? 'bg-gradient-primary' : 'bg-[#DF0000]'
            }`}
          ></div>
        </>
      ) : (
        <div className="relative flex items-center">
          <div className="w-8 h-8 rounded-full bg-black/40 skeleton mr-3"></div>

          <p className="h-5 w-20 bg-black/40 skeleton"></p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
