import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { PhoneForm } from 'components/PhoneForm';
import React, { useEffect } from 'react';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from 'redux/phoneBookReducer';
import { selectFilter } from 'redux/filter.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts.selectors';

const ContactPage = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const getFilteredContacts = filter => {
    try {
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter)
      );
    } catch (err) {
      return contacts;
    }
  };

  const addConatct = ({ event, name, number }) => {
    event.preventDefault();
    if (
      contacts.some(contact => contact.name === name || contact.number === number)
    ) {
      toast.error('Oops, this number is already exist!', {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;
    }
    console.log(0);
    console.log({name, number})
    dispatch(addContactThunk({ name, number }));
  };

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  useEffect(()=>{
    dispatch(fetchContactsThunk())
  }, [dispatch])


  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneForm handleAddNumber={addConatct} />
      <h2>Contacts</h2>
      <Filter filter={filter} contacts={contacts} />
      <ContactList
        contacts={getFilteredContacts(filter) ?? []}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default ContactPage;
