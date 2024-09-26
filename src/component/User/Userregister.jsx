import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Back from '../Back/Back';

const MyCard = styled(Card)({
  width: '400px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  margin: 'auto', // Center the card
  marginTop: '50px',
});

const MyForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

// Function to get existing users from local storage
const getExistingUsers = () => {
  // Retrieve existing users from local storage or initialize an empty array
  const existingUsers = JSON.parse(localStorage.getItem('loggedInUsers')) || [];
  return existingUsers;
};

// Function to add a new user to local storage
const addUserToLocalStorage = (newUser) => {
  const existingUsers = getExistingUsers();

  // Check if the email is already taken
  if (existingUsers.some((user) => user.email === newUser.email)) {
    alert('Email is already registered. Please use a different email.');
    return false;
  }

  // Add the new user to the array of existing users
  existingUsers.push(newUser);

  // Update local storage with the updated array of users
  localStorage.setItem('loggedInUsers', JSON.stringify(existingUsers));

  return true;
};

const SignUp = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate();

  const handleSignUp = () => {
    // Retrieve existing users from local storage
    const existingUsers = getExistingUsers();

    // Check if the email is already registered
    if (!addUserToLocalStorage({ email, username, dob, password })) {
      return;
    }

    // Add user registration logic here
    const newUser = { email, username, dob, password };

    // Update local storage with the new user added to the array
    localStorage.setItem('loggedInUser', JSON.stringify([...existingUsers, newUser]));

    // Set the current user as logged in
    setLoggedInUser(newUser);

    // Navigate to another route after successful sign up
    nav('/Userlogin');
  };

  return (
    <section>
       
    <Back title='User Register' />
    <MyCard>
      <Typography variant="h2" align="center" gutterBottom>
        Sign Up
      </Typography>
      <MyForm>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </MyForm>
    </MyCard>
    </section>
  );
};

export default SignUp;