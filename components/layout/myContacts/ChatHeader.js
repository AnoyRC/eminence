import ProfileAvatar from '@/components/ui/ProfileAvatar';
import ChatHeaderMenu from './ChatHeaderMenu';

const ChatHeader = ({ avatar, name, id, status, loading }) => {
  return (
    <div className="flex justify-between items-center w-full py-2 px-5 border-b border-primary-white">
      <div className="flex gap-5">
        {loading ? (
          <>
            <div className="w-12 h-12 rounded-full bg-black/40 skeleton"></div>

            <div className="flex flex-col justify-center">
              <h3 className="h-5 w-24 bg-black/40 skeleton mb-1"></h3>

              <p className="bg-black/40 h-4 w-10 skeleton"></p>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      <ChatHeaderMenu />
    </div>
  );
};

export default ChatHeader;
