'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import usePostServer from '@/hooks/usePostServer';
import useToast from '@/hooks/useToast';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const chatId = useSelector((state) => state.contact.chatId);
  const { Error } = useToast();

  const { createMessage } = usePostServer();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(chatId);
    if (chatId === null) Error('Please select a contact');

    try {
      await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/ably/message`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          channelName: chatId._id,
          message,
        }),
      });
      await createMessage('text', chatId, message);
      setMessage('');
    } catch (erorr) {
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
