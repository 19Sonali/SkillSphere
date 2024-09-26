import React from 'react'
import JobCard from './JobCard'
import OnlineJobe from './OnlineJobe'
import Back from '../Back/Back'
import Header from '../Header'

export default function JobHome() {
  return (
    <div>
      
      <Back title= 'Explore Jobs'/>
      <JobCard/>
      <OnlineJobe/>
    </div>
  )
}
