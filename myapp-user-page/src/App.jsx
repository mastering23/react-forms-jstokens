import React, { useState, useEffect } from "react";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/users`);
      const retrievedUsers = await response.json();
      setAllUsers(retrievedUsers);
    };
    getUsers();
  }, []);

  return (
    <>
      <h1>TESTING</h1>
      <ul>
        {allUsers.map((singleUser) => (
          <li key={singleUser.id}>{singleUser.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
