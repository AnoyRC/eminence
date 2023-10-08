import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import Contacts from './Contacts';
import AddContactsBtn from './AddContactsBtn';

export default function AsideContainer() {
  return (
    <aside className="p-6 w-[300px] h-full bg-black/40 flex flex-col">
      <div className="flex justify-center items-center text-white p-px rounded-full mb-7 bg-gradient-priamry">
        <div className="w-full h-full flex justify-center items-center rounded-full bg-black px-3 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-primary-white" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-base ml-3 w-full text-primary-white"
          />
        </div>
      </div>

      <div className="flex justify-between items-center w-full mb-6">
        <h2 className="text-white text-2xl font-bold">Contacts</h2>
        <AddContactsBtn />
      </div>

      <Contacts />
    </aside>
  );
}
