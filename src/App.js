import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './userCard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching the user data", error);
    }
  };

  return (
    <div className="App">
      <h1>Random User Generator</h1>
      <button onClick={fetchRandomUser}>Generate New User</button>
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
