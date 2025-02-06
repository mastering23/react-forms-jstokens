import React, { useState, useEffect } from "react";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [emailInput, setEmailInput] = useState([]);
  const [nameInput, setName] = useState([]);
  const [passwordInput, setPassword] = useState([]);
  const [roleInput, setRole] = useState([]);
  const [avatarInput, setAvatar] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/users`);//get request
      const retrievedUsers = await response.json();
      setAllUsers(retrievedUsers);
    };
    getUsers();
  }, []);

  const CreateUser = async (event) => {  
    event.preventDefault();

    const response = await fetch('https://api.escuelajs.co/api/v1/users', {  
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: emailInput,
            name: nameInput,
            password: passwordInput,
            role: roleInput,
            avatar: avatarInput
        })
    });

    const x = await response.json();
    console.log(x);
   
  }

  return (
    <>
      <h1>TESTING</h1>
      <ul>
      <form onSubmit={CreateUser}>
        <input placeholder="email" type="email" onChange={(event)=>{setEmailInput(event.target.value)}} />
        <input placeholder="name"  onChange={(event)=>{setName(event.target.value)}} />
        <input placeholder="password"   type ="password" onChange={(event)=>{setPassword(event.target.value)}} />
        <input placeholder="role" onChange={(event)=>{setRole(event.target.value)}} />
        <input placeholder="avatar" onChange={(event)=>{setAvatar(event.target.value)}} />
        <button>Submit</button>
      </form>
      </ul>
      <ul>
        {allUsers.map((singleUser) => (
          <li key={singleUser.id}>{singleUser.name}</li>
        ))}
      </ul>

      
    </>
  );
};

export default App;
