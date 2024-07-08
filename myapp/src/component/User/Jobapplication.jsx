import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import Back from '../Back/Back';
import { useNavigate } from 'react-router-dom';

export default function JobApplicationForm() {
    const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    resume: null,
  });

  const [applied, setApplied] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'resume' ? files[0] : value,
    });
  };

  const handleApply = () => {
    // Simulate sending application to the contact number
    console.log('Application submitted:', formData);
    // You can add your actual logic here to send data to the backend

    // Set applied to true to show the success message
    setApplied(true);
  };

  return (
    <section>
       
        <Back title='Job Application' />
    <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Job Application
        </Typography>
        {applied ? (
          <Typography variant="body1" color="success">
            Applied successfully! We will contact you soon.
            <button onClick={()=>nav('/Userhome')}>Home</button>
          </Typography>
        ) : (
          <form>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Upload Resume"
              fullWidth
              margin="normal"
              name="resume"
              type="file"
              onChange={handleChange}
              inputProps={{ accept: '.pdf, .doc, .docx' }}
              required
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleApply}
              fullWidth
              size="large"
              style={{ marginTop: '1rem' }}
            >
              Apply
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
    </section>
  );
 
}
