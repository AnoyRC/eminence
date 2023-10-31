'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { configureAbly } from '@ably-labs/react-hooks';

import usePostServer from '@/hooks/usePostServer';
import useGetServer from '@/hooks/useGetServer';
import { clearMessages } from '@/redux/contactSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const { createChat } = usePostServer();
  const { getChatMessages } = useGetServer();

  const user = useSelector((state) => state.profile.user);
  const chatId = useSelector((state) => state.contact.chatId);
  const messages = useSelector((state) => state.contact.messages);
  const currentContact = useSelector((state) => state.contact.contact);

  useEffect(() => {
    const fetchChat = async () => {
      await createChat(currentContact);
    };

    fetchChat();
  }, [currentContact]);

  useEffect(() => {
    const fetchMessages = async () => {
      await getChatMessages(chatId._id);
    };

    const ably = configureAbly({
      authUrl: `${process.env.NEXT_PUBLIC_NEXT_URL}/api/ably/auth?id=${user._id}`,
    });

    let channel = ably.channels.get(chatId?._id);

    if (chatId) {
      fetchMessages();

      channel = ably.channels.get(chatId._id);

      channel.subscribe((message) => {
        fetchMessages();
      });
    }

    return () => {
      channel.unsubscribe();
    };
  }, [chatId, currentContact]);

  return (
    <div className="mb-6 flex-1 relative">
      <Image
        src="/images/logo.png"
        width={500}
        height={500}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 prevent-select -z-0"
        alt=""
      />

      {messages &&
        messages.map((message) => (
          <div
            key={message._id}
            className={`flex ${
              message.sender === currentContact
                ? 'justify-start'
                : 'justify-end'
            }`}
          >
            <p
              className={`text-sm text-primary-black px-4 py-2 rounded-full font-medium mb-1.5 ${
                message.sender === currentContact
                  ? 'bg-[#49E9FF]'
                  : 'bg-[#40ff8d]'
              }`}
            >
              {message.content}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Chat;
