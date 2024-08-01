import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Admin = () => (
  <div>
    <h2>Admin</h2>
    <nav>
      <Link to="users">Users</Link>
    </nav>
    <Outlet />
  </div>
);

export default Admin;
