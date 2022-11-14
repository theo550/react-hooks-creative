import React from 'react';
import DeleteUser from '../DeleteUser/DeleteUser';
import UpdateUser from '../UpdateUser/UpdateUser';

import './readUser.css';

const ReadUser = ({ users, deleteUser, handleEdit }) => {
  return (
    <div>
      <h3>View User</h3>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return(
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <UpdateUser id={user.id} handleEdit={handleEdit}/>
                  <DeleteUser deleteUser={deleteUser} id={user.id}/>
                </td>
              </tr>
            )
          })}
          </tbody>
      </table>
      
    </div>
  )
}

export default ReadUser