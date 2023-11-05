export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span className="contact-data">
              {contact.name} | <span>{contact.number}</span>
            </span>
            <button type="button" onClick={() => handleDelete(contact.id)}>
              &#10006;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
