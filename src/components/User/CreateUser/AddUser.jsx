import React, { useRef, useState } from 'react';

import './addUser.css';

const AddUser = ({ addUser }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const firstNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(firstName, lastName);
    setFirstName('');
    setLastName('');
    firstNameRef.current.focus();
  };

  return (
    <div>
      <h3>Add User</h3>
      <form className='form' onSubmit={handleSubmit}>
        <input ref={firstNameRef} className='input' type='text' placeholder='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input className='input' type='text' placeholder='LastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <button className='btn-primary' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddUser;
