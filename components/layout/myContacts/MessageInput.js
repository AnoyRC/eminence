'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage('');
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
        type="button"
        className="rounded-full flex justify-center items-center bg-gradient-priamry py-1.5 pl-2 pr-1"
        onClick={onSubmit}
      >
        <PaperAirplaneIcon className="h-6 w-6" />
      </button>
    </form>
  );
};

export default MessageInput;
