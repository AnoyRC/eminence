import ContactList from "./ContactList";
import ContactTab from "./ContactTab";

const Contacts = () => {
  const contacts = [
    { name: "Sourabh" },
    { name: "Gautam Raj" },
    { name: "Anoy" },
    { name: "Pratik" },
  ];

  return (
    <section className="flex flex-col gap-3 w-full mt-6">
      {contacts.map((contact) => (
        <ContactTab key={contact.name} name={contact.name} />
      ))}
    </section>
  );
};

export default Contacts;
