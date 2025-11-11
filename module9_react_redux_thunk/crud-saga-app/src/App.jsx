import React from 'react';
import UsersList from './features/users/UsersList';
import UserForm from './components/UserForm';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif'}}>
      <h1 style={{marginLeft: '35% ', marginBottom:'40px'}}>CRUD with Redux Saga 🚀</h1>
      <UserForm />
      <UsersList />
    </div>
  );
}

export default App;
