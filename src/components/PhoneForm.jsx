import { useState } from 'react';

export const PhoneForm = ({ handleAddNumber }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
    }
  };

  return (
    <div className='add-contact'>
      <h2>Add contact</h2>
      <form
        onSubmit={event => {
          handleAddNumber({
            event,
            name,
            number,
          });
          setName('');
          setNumber('');
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Contact name"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Contact number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
