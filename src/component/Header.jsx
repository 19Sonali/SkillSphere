import React from 'react'
import Head from './Head'
import './Header.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [click, setClick]= useState(false)
  return (
    <div>
        <Head/>
        <header>
            <nav className='flexSB'>
                <ul className={click ? "mobile-nav": "flexSB"} onClick={()=> setClick(false)}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className='start'>
                    <div className='button'>
                    <Link to="/getstarted">Get Started</Link>
                    </div>
                </div>
                <button className='toggle' onClick={()=> setClick(!click)}>
                    {click ? <i className='fa fa-time'></i>:<i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>
    </div>
  )
}
