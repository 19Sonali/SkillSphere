import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'
import Home from './Home'
import About from './About/About'
import JobHome from './AllJobs/JobHome'
import Contact from './Contact/Contact'
import Footer from './Common/Footer'
import Header from './Header'
import Getstarted from './Main/Getstarted'
import Adminlogin from './Admin/Adminlogin'
import Adminregister from './Admin/Adminregister'
import DisplayJobs from './Admin/Displayjob'
import Edit from './Admin/Edit'
import Adminhome from './Admin/Adminhome'

import Admininsert from './Admin/Admininsert'
import Adminprofile from './Admin/Adminprofile'
import Userlogin from './User/Userlogin'
import Userregister from './User/Userregister'
// import Jobs from './User/Jobs'
import Userhome from './User/Userhome'
import Userjob from './User/Userjob'
import Jobapplication from './User/Jobapplication'

 export default function Router() {
        const [loggedInUser, setLoggedInUser] = useState(null)
        const [loggedInAdmin, setLoggedInAdmin] = useState(null)

  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/jobs' element={<JobHome/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/getstarted' element={<Getstarted/>}/>
            <Route exact path='/Adminlogin' element={<Adminlogin setLoggedInAdmin={setLoggedInAdmin}/>}/>
            <Route exact path='/Adminregister' element={<Adminregister setLoggedInAdmin={setLoggedInAdmin}/>}/>
            <Route exact path='/DisplayJobs' element={<DisplayJobs/>}/>
            <Route exact path='/Edit/:index' element={<Edit/>}/>
            <Route exact path='/Adminhome' element={<Adminhome/>}/>
            <Route exact path='/Adminprofile' element={<Adminprofile/>}/>
            <Route exact path='/Admininsert' element={<Admininsert/>}/>
            <Route exact path='/Userlogin' element={<Userlogin setLoggedInUser={setLoggedInUser}/>}/>
            <Route exact path='/Userregister' element={<Userregister setLoggedInUser={setLoggedInUser}/>}/>
            <Route exact path='/Userhome' element={<Userhome/>}/>
            <Route exact path='/Userjob' element={<Userjob/>}/>
            <Route exact path='/Jobapplicationform' element={<Jobapplication/>}/>
            
            
    </Routes>
    <Footer/>
</BrowserRouter> 
</div>
 )
}

