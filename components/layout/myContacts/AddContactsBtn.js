'use client';

import { useDispatch } from 'react-redux';
import { togglePopup } from '@/redux/contactsSlice';
import { UserPlusIcon } from '@heroicons/react/24/outline';

const AddContactsBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="flex justify-center items-center p-2 rounded-full bg-gradient-priamry"
      onClick={() => dispatch(togglePopup(true))}
    >
      <UserPlusIcon className="h-4 w-4" />
    </button>
  );
};

export default AddContactsBtn;
