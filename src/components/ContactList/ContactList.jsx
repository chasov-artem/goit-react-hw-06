import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => deleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
