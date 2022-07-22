import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import AddTeam from './AddTeam'

const Team = () => {
  return (
    <div >
      <Navbar/>
     <div className='O'>
     <div className='side'>
      <div className='D'>Time </div>
      <div className='D'> Task</div>
      <div className='D'>Team</div>
      <div className='D'>Activities</div>
      <div className='D'>Reports</div>
      <div className='D'><Link to="./subscription">Subscription</Link></div>
     </div>
     <div className='S'>
      <AddTeam/>
     </div>

     </div>
    </div>
  )
}

export default Team