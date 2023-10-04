import { MagnifyingGlassIcon, UserPlusIcon } from '@heroicons/react/24/outline';

import Contacts from './Contacts';

export default function AsideContainer() {
  return (
    <aside className="p-6 w-[300px] h-full bg-black/40 flex flex-col">
      <div className="flex justify-center items-center text-white p-[1px] rounded-full mb-7 bg-gradient-priamry">
        <div className="w-full h-full flex justify-center items-center rounded-full bg-black px-3 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-primary-white" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-base ml-3 w-full text-primary-white"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-primary-white text-2xl font-bold">Contacts</h1>

        <div className="flex justify-center items-center p-2 rounded-full bg-gradient-priamry">
          <UserPlusIcon className="h-4 w-4" />
        </div>
      </div>

      <Contacts />
    </aside>
  );
}
