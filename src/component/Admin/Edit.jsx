import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router-dom';
import './mystyle.css';
import Back from '../Back/Back';
export default function EditJob() {
  const { index } = useParams();
  const Nav = useNavigate();

  const [edit, setEdit] = useState({
    title: '',
    company: '',
    description: '',
    skills: [],
    contact: '',
    location: '',
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("jobs")) || [];
    let singleData = data[index] || {};
    setEdit(singleData);
  }, [index]);

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (event, value) => {
    setEdit({ ...edit, skills: value });
  };

  const handleEdit = () => {
    let data = JSON.parse(localStorage.getItem("jobs")) || [];
    data[index] = edit;
    localStorage.setItem("jobs", JSON.stringify(data));
    Nav('/AdminHome');
  };

  return (
    <section>
      <Back title='Edit' />
    <div className='insert'>
      
        
      {/* <h1>Edit information</h1> */}
      <TextField id="outlined-basic" onChange={()=>handleChange} name="title" label="Enter job title" variant="outlined"
        className='textfield' value={edit.title || ''}/>
      <br />
      <br />
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="company"
        label="Enter Company name"
        variant="outlined"
        className='textfield'
        value={edit.company || ''}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="description"
        label="Enter a brief job description"
        variant="outlined"
        className='textfield'
        value={edit.description || ''}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="contact"
        label="Enter contact information"
        variant="outlined"
        className='textfield'
        value={edit.contact || ''}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="location"
        label="Enter the job location"
        variant="outlined"
        className='textfield'
        value={edit.location || ''}
      />
      <br />
      <br />
      <Button onClick={handleEdit} variant="contained">
        Save
      </Button>
    </div>
    </section>
  );
}
