'use client';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import SendMessageContainer from './SendMessageContainer';
import Chat from './Chat';
import ChatHeader from './ChatHeader';

export default function ChatBox() {
  const currentContact = useSelector((state) => state.contact.contact);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/user/info/${currentContact}`
      );
      const data = await res.json();
      console.log(data);
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col w-full h-full border border-primary-white border-t-transparent">
      {currentContact && user && (
        <>
          <ChatHeader
            avatar={user.avatarId}
            name={`${user.firstName} ${user.lastName}`}
            id={user.pubkey}
            status={user}
          />

          <section className="px-9 py-6 h-full flex flex-col justify-between">
            <Chat pubkey={user.pubkey} />
            <SendMessageContainer id={user.pubkey} />
          </section>
        </>
      )}
    </div>
  );
}
