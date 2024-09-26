import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import './mystyle.css'
import Back from '../Back/Back';

export default function AdminInsert() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    description: '',
    skills: [],
    contact: '',
    location: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (event, value) => {
    setJob({ ...job, skills: value });
  };

  const nav = useNavigate();

  const Submit = () => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    setJob({
      title: '',
      company: '',
      description: '',
      skills: [],
      contact: '',
      location: '',
    });
    nav('/AdminHome');
  };

  return (
    <section>
    <Back title='Insert Jobs' />
    <div className='insert'>
        
        
      <h1>Enter the details</h1>
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="title"
        label="Enter job title"
        variant="outlined"
        className='textfield'
      />
      <br />
      <br />
      <TextField id="outlined-basic" name='companylogo' onChange={handleChange} 
      variant="outlined"
      className='textfield'
      placeholder='(go to unsplash website copy image address) for image' />

      <br />
      <br />
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="company"
        label="Enter Company name"
        variant="outlined"
        className='textfield'
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
      />
      <br />
      <br />
      <Autocomplete
        multiple
        id="tags-filled"
        className='textfield'
        options={top100Films.map((option) => option.title)}
        value={job.skills}
        freeSolo
        onChange={handleSkillsChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Skills required"
            name="skills"
            placeholder="Enter the skills required"
            onChange={handleChange}
          />
        )}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="contact"
        label="Enter contact information"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        name="location"
        label="Enter the job location"
        variant="outlined"
      />
      <br />
      <br />
      <Button onClick={Submit} variant="contained">Submit</Button>
    </div>
    </section>
  );
}

const top100Films = [
    { title: 'Communication Skills'},
    { title: 'Web development'},
    { title: 'UI/UX design'},
    { title: 'Database management'},
    { title: 'Graphic design'},
    { title: 'Social media management'},
    { title: 'Cloud computing'},
    { title: 'Artifical intelligence'},
    { title: 'Human resource'},
    { title: 'Electrical engineering'},
    { title: 'Mechanical engineering'},
    { title: 'Nursing'},
    { title: 'Physical therapy'},
    { title: 'Electronics and communication engineering'},
    { title: 'Freelancer'},
    { title: 'Leadership'},
    { title: 'Data analysis'},
    { title: 'Software development'},
    { title: 'SEO'},
    { title: 'DevOps'},
    { title: 'Blockchain'},
    { title: 'Virtual reality'},
    { title: 'Employee training'},
    { title: 'Statistical analysis'},
    { title: 'Health and safety'},
    { title: 'Logistics'},
    { title: 'Event planning'},
    { title: 'Quality control'},
    { title: 'Project Management'},
    { title: 'Business understanding'},
    { title: 'Legal and ethical awareness'},
    { title: 'Business development and marketing'},
    { title: 'Cybersecurity'},
    { title: 'Mobile app development'},
    { title: 'React JS'},
    { title: 'Android development'},
    { title: 'Finance and budgeting'},
    { title: 'Voice search optimization'},
    { title: 'Edge computing'},
    { title: 'DevOps'},
    { title: 'English proficiency'},
    { title: 'Effective communication'},
    { title: 'Graphic desinging'},
    { title: 'Videography'},
    { title: 'Photography'},
    { title: 'Sales'},
    { title: 'Leadership'},
    { title: 'MS excel'},
    { title: 'PCB designing'},
    { title: 'CAD'},
    
   
  ];