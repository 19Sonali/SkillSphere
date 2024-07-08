import React from 'react'
import Back from '../Back/Back'
import './Getstarted.css'
import { useNavigate } from 'react-router-dom'


export default function Getstarted() {
    const nav = useNavigate()
  return (
    <div>
        
        <Back title = 'Get Started'/>
        <section className='getstarted'>
        <div className='container flexSB'>
            <div className='button'>
                
                <button onClick={()=>nav('/Userlogin')} className='action-button'>User</button>
                <button onClick={()=>nav('/Adminlogin')} className='action-button'>Admin</button>
                </div>
            </div>
        </section>
    </div>
  )
}
