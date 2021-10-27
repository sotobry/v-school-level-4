import { useState } from 'react';

const ChangingMoreComplexState = () => {
  const [inputData, setInputDataTo] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsDataTo] = useState([]);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    setInputDataTo(state => ({ ...state, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setContactsDataTo(state => ([...state, inputData]));
  };

  const contacts = contactsData.map(({ firstName, lastName }, i) => <li key={`${firstName}${lastName}-${i}`}>{firstName} {lastName}</li>);

  return (<>
    <form onSubmit={handleSubmit}>
      <input
        placeholder='First Name'
        name='firstName'
        value={inputData.firstName}
        onChange={handleChange}
      />
      <input
        placeholder='Last Name'
        name='lastName'
        value={inputData.lastName}
        onChange={handleChange}
      />
      <br />
      <button>Add contact</button>
    </form>
    <ul>{contacts}</ul>
  </>);
};

export default ChangingMoreComplexState;