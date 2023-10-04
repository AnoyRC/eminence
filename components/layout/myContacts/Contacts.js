import ContactList from './ContactList';

const Contacts = () => {
  const contacts = [
    { name: 'Sourabh' },
    { name: 'Gautam Raj' },
    { name: 'Anoy' },
    { name: 'Pratik' },
  ];

  return (
    <section className="flex flex-col gap-3 w-full">
      {contacts.map((contact) => (
        <ContactList key={contact.name} name={contact.name} />
      ))}
    </section>
  );
};

export default Contacts;
