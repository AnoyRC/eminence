'use client';

import { useSelector } from 'react-redux';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

import ProfileAvatar from '@/components/ui/ProfileAvatar';
import MessageInput from './MessageInput';

const SendMessageContainer = () => {
  const currentUser = useSelector((state) => state.profile.user);

  return (
    <div className="flex justify-center items-center gap-5">
      <ProfileAvatar
        id={currentUser.avatarId}
        style={{ width: '3rem', height: '3rem' }}
      />

      <div className="w-full flex items-center rounded-full bg-black/40 pl-5">
        <ChatBubbleLeftIcon className="text-white w-6 h-6 my-3" />

        <MessageInput />
      </div>
    </div>
  );
};

export default SendMessageContainer;
