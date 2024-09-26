import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Back from '../Back/Back';
// import './mystyle.css'


export default function DisplayJobs() {

    const [jobs, setJobs] = useState([]);
    const Nav = useNavigate()
    useEffect(() => {
      let jobsStored = JSON.parse(localStorage.getItem('jobs')) || [];
      setJobs(jobsStored);
    }, []);
  
    const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = useState(" ")
  const handleOpen = (index) => {
    setDeleteId(index)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  
  const Delete  = () => {
    let newData = jobs.filter((item, index)=>{
        return index!= deleteId
    })
    setJobs(newData)
    localStorage.setItem("jobs", JSON.stringify(newData))
    handleClose()
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 
  return(
    <div className='jobcard'>
     
    {/* <Back title='Jobs' /> */}

    {jobs.map((job, index) => (
      <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }} className='card'>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={job.companylogo}
            alt={job.title || "Job Image Alt Text"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {job.title || "Job Title"}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {job.company || ""}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.description || " "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.skills || " "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.contact || " "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.location || " "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.description || " "}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='button'>
          <Button size="small" color="primary" onClick={()=>Nav(`/Edit/${index}`)} >Edit</Button>
          <Button size="small" color="primary" onClick={()=>handleOpen(index)} >Delete</Button>
          </CardActions>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete?
          </Typography>
          <Button sx={{margin: "20px"}} color='error' variant="contained" onClick={Delete} >Yes</Button>
          <Button color='success' variant="contained" onClick={handleClose}>No</Button>
        </Box>
      </Modal>
          
          
        </Card>
        
      ))}
      
    </div>
  )
}