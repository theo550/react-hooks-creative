import React from 'react'

function DeleteUser({ deleteUser, id }) {
  return (
    <button 
      onClick={() => deleteUser(id)}
      className='btn-action'
    >
      Delete
    </button>
  )
}

export default DeleteUser