'use client';

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import localFont from 'next/font/local';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import usePostServer from '@/hooks/usePostServer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { clearSelectedContact } from '@/redux/contactSlice';
import useToast from '@/hooks/useToast';
import { togglePayPopup } from '@/redux/contactsSlice';

const myFont = localFont({
  src: '../../../public/fonts/Satoshi-Variable.woff2',
});

const ChatHeaderMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { Error } = useToast();
  const [toggleAddRemoveContact, setToggleAddRemoveContact] = useState(false);
  const { addContact, removeContact, removeChat, removeMessages } =
    usePostServer();
  const contacts = useSelector((state) => state.profile.contacts);
  const currentContact = useSelector((state) => state.contact.contact);
  const chatId = useSelector((state) => state.contact.chatId);

  const handlePayPopup = () => {
    dispatch(togglePayPopup(true));
  };

  const handleCardClick = () => {
    router.push(`/profile/${currentContact}`);
  };

  const handleRemoveContactClick = async () => {
    try {
      await removeContact(currentContact);
      Promise.all([removeChat(chatId._id), removeMessages(chatId._id)]);
      dispatch(clearSelectedContact());
    } catch (err) {
      Error('Something went wrong');
    }
  };

  const handleAddContactClick = async () => {
    await addContact(currentContact);
  };

  useEffect(() => {
    if (contacts.includes(currentContact)) {
      setToggleAddRemoveContact(true);
    } else {
      setToggleAddRemoveContact(false);
    }
  }, [contacts, currentContact]);

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <button className="border border-primary-white rounded-full">
          <EllipsisHorizontalIcon
            color="white"
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </button>
      </MenuHandler>

      <MenuList className="bg-primary-black">
        <MenuItem
          className={`text-primary-white hover:bg-black/40 hover:text-primary-white font-medium ${myFont.className}`}
          onClick={handlePayPopup}
        >
          Pay User
        </MenuItem>

        <MenuItem
          className={`text-primary-white hover:bg-black/40 hover:text-primary-white font-medium ${myFont.className}`}
          onClick={handleCardClick}
        >
          View Card
        </MenuItem>

        <MenuItem
          className={`text-primary-white hover:bg-black/40 hover:text-primary-white font-medium ${myFont.className}`}
          onClick={
            toggleAddRemoveContact
              ? handleRemoveContactClick
              : handleAddContactClick
          }
        >
          {toggleAddRemoveContact ? 'Remove Contact' : 'Add Contact'}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ChatHeaderMenu;
