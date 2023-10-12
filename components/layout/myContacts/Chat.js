'use client';

import { useEffect } from 'react';

import usePostServer from '@/hooks/usePostServer';
import useGetServer from '@/hooks/useGetServer';
import { useSelector } from 'react-redux';

const Chat = ({ pubkey }) => {
  const { createChat } = usePostServer();
  const { getChatMessages } = useGetServer();

  const chatId = useSelector((state) => state.contact.chatId);
  const messages = useSelector((state) => state.contact.messages);

  useEffect(() => {
    const fetchChat = async () => {
      await createChat(pubkey);
    };

    fetchChat();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      await getChatMessages(chatId._id);
    };

    if (chatId) fetchMessages();
  }, [chatId]);

  return (
    <div className="mb-6 flex-1">
      {messages &&
        messages.map((message) => (
          <div
            className={`flex ${
              message.sender === pubkey ? 'justify-start' : 'justify-end'
            }`}
          >
            <p
              key={message._id}
              className={`text-sm text-primary-black px-4 py-2 rounded-full font-medium mb-1.5 ${
                message.sender === pubkey ? 'bg-[#49E9FF]' : 'bg-[#40ff8d]'
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
