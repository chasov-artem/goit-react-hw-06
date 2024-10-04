import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filters.toLowerCase().trim())
  );

  if (!contacts || contacts.length === 0) {
    return <p>Немає контактів для відображення.</p>;
  }

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
