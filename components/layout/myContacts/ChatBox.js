'use client';

import { useSelector } from 'react-redux';

import SendMessageContainer from './SendMessageContainer';
import Chat from './Chat';
import ChatHeader from './ChatHeader';

export default function ChatBox() {
  const currentContact = useSelector((state) => state.contact.contact);

  return (
    <div className="flex flex-col w-full h-full border border-primary-white border-t-transparent">
      <ChatHeader
        avatar={currentContact.name}
        name={currentContact.name}
        id={currentContact.id}
        status={currentContact}
      />

      <section className="px-9 py-6 h-full flex flex-col justify-between">
        <Chat />
        <SendMessageContainer />
      </section>
    </div>
  );
}
