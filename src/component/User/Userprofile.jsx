import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const UserProfile = () => {


  const cardStyle = {
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: 'rgba(240, 240, 240, 0.5)', // More transparent background color for the card
    color: '#2c3e50', // Dark text color
    margin: 'auto',
    marginTop: '50px',
    marginLeft: '10%', // Adjust the left margin
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 0.7, // Set opacity for the watermark effect
    fontWeight: 'bold', // Set font weight to bold
  };

  const pageStyle = {
  
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add a shadow around the page
  
  };


  const [loggedInUser, setLoggedInUser] = useState(null);
  const [editedProfile, setEditedProfile] = useState({
    email: '',
    username: '',
    dob: '',
    starredCompanies: [],
  });

  useEffect(() => {
    // Fetch user information from local storage
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      ...storedUser,
    }));
  }, []);

  useEffect(() => {
    // Fetch user information from local storage
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setLoggedInUser(storedUser);
  }, []);

 

  
  const [resume, setResume] = useState(null);
  const [educationalBackground, setEducationalBackground] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleLogout = () => {
    // Clear user information from local storage on logout
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  const saveProfile = () => {
    // Save edited profile data, including the uploaded resume
    // Update local storage with starred companies
    localStorage.setItem('userFavorites', JSON.stringify(editedProfile.starredCompanies));
    alert('Profile saved successfully!');
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <Typography variant="h4" align="center" gutterBottom>
          PROFILE
        </Typography>
        <form>
          <TextField
            type="email"
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
            value={editedProfile.email}
          />
          <TextField
            type="text"
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            placeholder="Enter your username"
            value={editedProfile.username}
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            name="dob"
            label="Date of Birth"
            fullWidth
            margin="normal"
            value={editedProfile.dob}
            onChange={handleInputChange}
          />
          <TextField
            type="text"
            name="educationalBackground"
            label="Educational Background"
            fullWidth
            margin="normal"
            value={educationalBackground}
            onChange={(e) => setEducationalBackground(e.target.value)}
          />
          <Link to="/Edit" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EditIcon />}
              style={{ width: '100%', marginTop: '20px' }}
            >
              Edit
            </Button>
          </Link>
          <TextField
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            style={{ marginTop: '20px' }}
          />
          <Button
            variant="contained"
            color="success"
            size="small"
            endIcon={<SaveIcon />}
            style={{ width: '100%', marginTop: '20px' }}
            onClick={saveProfile}
          >
            Save Profile
          </Button>
        </form>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Starred Companies
        </Typography>
        <ul style={{ paddingInlineStart: '20px' }}>
          {editedProfile.starredCompanies.map((company) => (
            <li key={company.id}>{company.name}</li>
          ))}
        </ul>

        {loggedInUser ? (
        <>
          <p>Welcome, {loggedInUser.username}!</p>
          {/* Display other user information as needed */}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please login to view your profile.</p>
      )}

      </div>
    </div>
  );
};

export default UserProfile;