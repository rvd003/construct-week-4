import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div>
           <div className='Nav'>
           <div className='inner'><img  className='L' src="https://tse1.mm.bing.net/th?id=OIP.JB4Vs0E9KX-SSnjJuMX4dAAAAA&pid=Api&P=0" alt="image1"/>
               </div>
               <div className='out'>
           
           <div class="dropdown">
  <span>Why Tmetric</span>
  <div class="dropdown-content">
  <p>Time Tracking</p>
  <div><Link to="./team">Team Management</Link></div>
  <p>Billing & invoicing</p>
  <p>Task Management</p>
  <p>Project Management</p>
  <p>Time Off</p>
  </div>
</div>
<div class="dropdown">
  <span>Apps & Integration</span>
  <div class="dropdown-content">
    
    <p>JIRA</p>
    <p>GITHUB</p>
    <p>MS OFFICE</p>
  <p>ASANA</p>
  <p>TODOIST</p>
  <p>FRESHDESK</p>
    
 
  </div>
</div> 
          
          
           <div className='div1'> <Link to="./subscription"> Pricing & subcription</Link>
           </div>
           </div>
           <div className='log'>
            <div><Link to="./login"> <button className='button-23'>LogIn</button></Link></div>
            <div><Link to="./register"><button className='button-24'>SignIn</button></Link></div>
           </div>
           
          
                
             </div> 
    </div>
  )
}

export default Navbar