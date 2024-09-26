import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Back from '../Back/Back';

const MyCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  marginTop: 50,
  padding: 20,
  borderRadius: 8,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  button: {
    marginTop: '20px',
  },
  link: {
    marginTop: '10px',
  },
});

const Login = ({ setLoggedInAdmin }) => {
    const nav = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here (checking against a database, etc.)
    // For simplicity, let's assume the user is valid
    const loggedInAdminData = { email, password }; // Include other user details as needed
    setLoggedInAdmin(loggedInAdminData);

    // Store user information in local storage
    localStorage.setItem('loggedInAdmin', JSON.stringify(loggedInAdminData));
    nav('/Adminhome')
  };


 
  return (
    <section>
    <Back title='Admin Login' />
    
    
    <MyCard sx={{marginBottom: '20px'}}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form className={MyCard.form}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          className={MyCard.button}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" align="center" className={MyCard.link}>
        Do not have an account? <Link to="/Adminregister">Click here to register</Link>
      </Typography>
    </MyCard>
    </section>
  );
};


export default Login;