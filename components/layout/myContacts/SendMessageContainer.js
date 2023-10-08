import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

import ProfileAvatar from '@/components/ui/ProfileAvatar';
import MessageInput from './MessageInput';

const SendMessageContainer = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <ProfileAvatar id="sourabh" style={{ width: '3rem', height: '3rem' }} />

      <div className="w-full flex items-center rounded-full bg-black/40 pl-5">
        <ChatBubbleLeftIcon className="text-white w-6 h-6 my-3" />

        <MessageInput />
      </div>
    </div>
  );
};

export default SendMessageContainer;
