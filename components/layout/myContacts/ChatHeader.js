'use client';

import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';

import ProfileAvatar from '@/components/ui/ProfileAvatar';
import ChatHeaderMenu from './ChatHeaderMenu';
import useToast from '@/hooks/useToast';

const ChatHeader = ({ avatar, name, id, status, loading }) => {
  const { Info } = useToast();

  return (
    <div className="flex justify-between items-center w-full py-2 px-5 border-b border-primary-white relative z-10">
      <div className="flex gap-5">
        {loading ? (
          <>
            <div className="w-12 h-12 rounded-full bg-black/40 skeleton"></div>

            <div className="flex flex-col justify-center">
              <h3 className="h-5 w-24 bg-black/40 skeleton mb-1"></h3>

              <p className="flex items-center gap-2 text-primary-white/60">
                Public Key:
                <p className="bg-black/40 h-4 w-48 skeleton"></p>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <ProfileAvatar
                id={avatar}
                style={{ width: '3rem', height: '3rem' }}
              />

              {/* <div
                className={`absolute top-0.5 right-1 border-primary-white border rounded-full w-1.5 h-1.5 ${
                  status === 'online' ? 'bg-gradient-primary' : 'bg-[#DF0000]'
                }`}
              ></div> */}
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-transparent text-xl bg-clip-text bg-gradient-priamry font-bold">
                {name}
              </h3>

              {/* <p className="text-xs font-medium text-primary-white/60">
                {status ? 'Active' : 'Not Active'}
              </p> */}

              <p className="text-xs font-medium text-primary-white/60 flex items-center gap-2">
                Public Key:{' '}
                <button
                  className={`flex flex-start items-center text-[12px] hover:cursor-pointer`}
                  onClick={() => {
                    navigator.clipboard.writeText(id ? id : '00000000');
                    Info('Copied to clipboard');
                  }}
                >
                  {id}
                  <DocumentDuplicateIcon className="w-[13px] h-[13px] ml-[4px]" />
                </button>
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
