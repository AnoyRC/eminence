'use client';

import { useSelector } from 'react-redux';

import ChatBackground from './ChatBackground';
import ChatBox from './ChatBox';

const ChatContainer = () => {
  const currentContact = useSelector((state) => state.contact.contact);

  return currentContact ? <ChatBox /> : <ChatBackground />;
};

export default ChatContainer;
