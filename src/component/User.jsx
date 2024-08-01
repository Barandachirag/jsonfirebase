import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const addUser = () => {
    axios.post('http://localhost:3000/users', { name, age, salary })
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error(error));
  };

  const deleteUser = id => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={e => { e.preventDefault(); addUser(); }}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <input type="text" placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.salary}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;

