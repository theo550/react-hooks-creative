import React, { useState } from 'react';

function UpdateUserForm({ users, editUser, index }) {

  const user = users.find(user => user.id === index);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(firstName, lastName);
  }

  return (
    <div>
      <h3>Add User</h3>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <input className='input' type='text' placeholder='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input className='input' type='text' placeholder='LastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <button className='btn-danger' type='submit'>Edit</button>
      </form>
    </div>
  )
}

export default UpdateUserForm