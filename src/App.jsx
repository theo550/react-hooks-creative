import { useState } from "react";
import AddUser from "./components/User/CreateUser/AddUser";
import ReadUser from "./components/User/ReadUser/ReadUser";
import UpdateUserForm from "./components/User/UpdateUser/UpdateUserForm";

function App() {

  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(0);
  const [id, setId] = useState(0);

  const addUser = (firstName, lastName) => {
    firstName !== '' && lastName !== '' &&
      setUsers([...users, {id: id, firstName: firstName, lastName: lastName}]);
      setId(id + 1);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  };

  const handleEdit = (id) => {
    setIsEditing(!isEditing);
    setIndex(id)
  };

  const editUser = (firstName, lastName) => {
    handleEdit();
    setUsers(
      users.map(user => {
        if (user.id === index) {
          return {...user, firstName: firstName, lastName: lastName};
        }
        return user;
    }));
  };

  return (
    <div className="App">
      <h1>CRUD App with Hooks</h1>

      <div style={styles.container} className="container">
        <div style={styles.left} className="left">
          {isEditing ? 
            <UpdateUserForm index={index} users={users} editUser={editUser}/>
            :
            <AddUser users={users} addUser={addUser} isEditing={isEditing} handleEdit={handleEdit}/>
          }
        </div>

        <div style={styles.right} className="right">
          <ReadUser users={users} deleteUser={deleteUser} handleEdit={handleEdit}/>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    padding: 10
  },
  left: {
    width: '50%'
  },
  right: {
    width: '50%'
  }
};
