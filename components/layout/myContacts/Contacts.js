"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import useGetServer from "@/hooks/useGetServer";

import ContactList from "./ContactList";
import { setSelectedContact } from "@/redux/contactSlice";
import { useRouter } from "next/navigation";

const Contacts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const contacts = useSelector((state) => state.profile.contacts);
  const { getUserContacts } = useGetServer();
  const router = useRouter();

  useEffect(() => {
    const fetchContacts = async () => {
      await getUserContacts();
    };

    if (user) fetchContacts();
  }, [user]);

  const handleContactClick = (contact) => {
    dispatch(setSelectedContact(contact));
    router.push("/contacts");
  };

  return (
    <section>
      <ul className="flex flex-col gap-3 w-full">
        {contacts &&
          contacts.map((contact) => (
            <li
              onClick={() => handleContactClick(contact)}
              className="cursor-pointer"
              key={contact}
            >
              <ContactList pubKey={contact} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Contacts;
