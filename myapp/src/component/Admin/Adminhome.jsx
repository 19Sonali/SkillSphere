import React from 'react'
import Back from '../Back/Back'
import { Button } from '@mui/material'
import DisplayJobs from './Displayjob'
import { useNavigate } from 'react-router-dom'

export default function Adminhome() {
    const nav = useNavigate()
  return (
  
        <section>
    <Back title='Admin Home' />
    <div className='button'>
    <Button onClick={ ()=>nav('/Admininsert')}> Insert Jobs</Button>
    {/* <Button onClick={ ()=>nav('/Adminprofile')}> Profile</Button> */}
    </div>
    <DisplayJobs/>
    
    
    </section>
    
  )
}
