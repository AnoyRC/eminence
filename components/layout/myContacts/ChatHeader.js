import ProfileAvatar from '@/components/ui/ProfileAvatar';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

const ChatHeader = ({ avatar, name, id, status }) => {
  return (
    <div className="flex justify-between items-center w-full py-2 px-5 border-b border-primary-white">
      <div className="flex gap-[20px]">
        <div className="relative">
          <ProfileAvatar
            id={avatar}
            style={{ width: '3rem', height: '3rem' }}
          />

          <div
            className={`absolute top-0.5 right-1 border-primary-white border rounded-full w-1.5 h-1.5 ${
              status === 'online' ? 'bg-gradient-primary' : 'bg-[#DF0000]'
            }`}
          ></div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-transparent text-xl bg-clip-text bg-gradient-priamry font-bold">
            {name}
          </h3>

          <p className="text-xs font-medium text-primary-white/60">
            {status ? 'Active' : 'Not Active'}
          </p>
        </div>
      </div>

      <button className="">
        <EllipsisHorizontalIcon color="white" />
      </button>
    </div>
  );
};

export default ChatHeader;
