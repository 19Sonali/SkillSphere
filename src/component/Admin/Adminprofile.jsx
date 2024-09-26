import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const AdminProfile = () => {


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
    background:'black',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add a shadow around the page
  
  };


  const [loggedInAdmin, setLoggedInAdmin] = useState(null);
  const [editedProfile, setEditedProfile] = useState({
    email: '',
    adminname: '',
    dob: '',
    starredCompanies: [],
  });

  useEffect(() => {
    // Fetch user information from local storage
    const storedAdmin = JSON.parse(localStorage.getItem('loggedInAdmin')) || {};
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      ...storedAdmin,
    }));
  }, []);

  useEffect(() => {
    // Fetch user information from local storage
    const storedAdmin = JSON.parse(localStorage.getItem('loggedInAdmin'));
    setLoggedInAdmin(storedAdmin);
  }, []);

 

  
  const [resume, setResume] = useState(null);
  const [role, setRole] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    // Clear user information from local storage on logout
    localStorage.removeItem('loggedInAdmin');
    setLoggedInAdmin(null);
  };
  

  const saveProfile = () => {
    // Save edited profile data, including the uploaded resume
    // Update local storage with starred companies
    // localStorage.setItem('userFavorites', JSON.stringify(editedProfile.starredCompanies));
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
            name="adminname"
            label="adminname"
            fullWidth
            margin="normal"
            placeholder="Enter your name"
            value={editedProfile.adminname}
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
            name="role"
            label="role"
            fullWidth
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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

      
      {loggedInAdmin ? (
        <>
          <p>Welcome, {loggedInAdmin.adminname}!</p>
          {/* Display other user information as needed */}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please login to view your profile.</p>
      )}
        </form>

        
      </div>
    </div>
  );
};

export default AdminProfile;