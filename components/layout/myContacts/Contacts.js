'use client';

import { useDispatch } from 'react-redux';
import { setSelectedContact } from '@/redux/contactSlice';

import ContactList from './ContactList';

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = [
    { name: 'Sourabh' },
    { name: 'Gautam Raj' },
    { name: 'Anoy' },
    { name: 'Pratik' },
  ];

  const handleContactClick = (contact) => {
    dispatch(setSelectedContact(contact));
  };

  return (
    <section>
      <ul className="flex flex-col gap-3 w-full">
        {contacts.map((contact) => (
          <li
            onClick={() => handleContactClick(contact)}
            className="cursor-pointer"
            key={contact.name}
          >
            <ContactList name={contact.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
