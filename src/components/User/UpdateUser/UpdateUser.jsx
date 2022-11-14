import React from 'react'

function UpdateUser({ handleEdit, id }) {

  return (
    <button
      onClick={() => handleEdit(id)}
      className='btn-action'
    >
      Edit
    </button>
  )
}

export default UpdateUser