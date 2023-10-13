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
      setUser(data);
    };

    fetchUser();
  }, [currentContact]);

  return (
    <div className="flex flex-col w-full h-full border border-primary-white border-t-transparent overflow-hidden">
      {currentContact && user && (
        <>
          <ChatHeader
            avatar={user.avatarId}
            name={`${user.firstName} ${user.lastName}`}
            id={user.pubkey}
            status={user}
          />

          <section className="px-9 py-6 h-full flex flex-col justify-between overflow-hidden">
            <div className="overflow-y-auto hide-scroll">
              <Chat pubkey={user.pubkey} />
            </div>

            <SendMessageContainer id={user.pubkey} />
          </section>
        </>
      )}
    </div>
  );
}
