'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import usePostServer from '@/hooks/usePostServer';
import useToast from '@/hooks/useToast';
import { configureAbly } from '@ably-labs/react-hooks';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const user = useSelector((state) => state.profile.user);
  const chatId = useSelector((state) => state.contact.chatId);
  const { Error } = useToast();

  const { createMessage } = usePostServer();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!message) {
        Error('Please enter a message');
        return;
      }

      const ably = configureAbly({
        authUrl: `${process.env.NEXT_PUBLIC_URL}/api/ably/auth?id=${user._id}`,
      });

      const channel = ably.channels.get(chatId._id);
      channel.publish('message', message);

      await createMessage('text', chatId, message);
      setMessage('');
    } catch (error) {
      Error('Something went wrong');
    }
  };

  return (
    <form className="w-full flex justify-between pr-1.5">
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-transparent flex-1 pl-4 focus:outline-none text-primary-white"
      />

      <button
        type="submit"
        className="rounded-full flex justify-center items-center bg-gradient-priamry py-1.5 pl-2 pr-1"
        onClick={onSubmit}
      >
        <PaperAirplaneIcon className="h-6 w-6" />
      </button>
    </form>
  );
};

export default MessageInput;
