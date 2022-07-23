import React from 'react'
import { Link } from 'react-router-dom'
import "./Pricing.css"
import Navbar from './Navbar'
import Footer from './Footer'

export const Pricing = () => {
  return (
    <div>
    <div className='P'><Navbar></Navbar></div>
    <div className='Qi'><h1>Pricing</h1>
    <h9>All plans include free 30-day trial. No credit card required!</h9>
    <hr/></div>
    <div className='RR'>
        <div className='Z'><h3>Business</h3>
        <div className='Li'>$7/month</div>
       <p>Time tracking</p>
       <p>Unlimited projects and clients</p>
       <p>Reporting</p>
       <p>Timer button in 50+ web apps</p>
       <p>Calendar integrations: Google, Outlook</p>
       <p>Budgeting for projects</p>
       <p>Task management</p>
       <p>Apps and sites usage reports</p>
       <p>Paid time off tracking</p>
       <p>Payroll for employees</p>
       <p>Time Off Calendar</p>
            <p>Work Schedule</p>
<p>Team Dashboard</p>
<p>Time-sync with Jira and QuickBooks</p>

        </div>
        {/* <div className='Z'>bb</div> */}
        <div className='Z'><h3>Professional</h3>
        <div className='Li'>$5/month</div>
       <p>Time tracking</p>
       <p>Unlimited projects and clients</p>
       <p>Reporting</p>
       <p>Timer button in 50+ web apps</p>
       <p>Calendar integrations: Google, Outlook</p>
       <p>Budgeting for projects</p>
       <p className='strikedd '>Task management</p>
       <p className='strikedd '>Apps and sites usage reports</p>
       <p className='strikedd '>Paid time off tracking</p>
       <p className='strikedd '>Payroll for employees</p>
       <p className='strikedd '>Time Off Calendar</p>
<p className='strikedd '>Work Schedule
</p>
<p className='strikedd '>Team Dashboard</p>
<p className='strikedd '>Time-sync with Jira and QuickBooks</p>

        </div>
        <div className='Z'><h3>Free</h3>
        <div className='Li'>Free</div>
       <p>Time tracking</p>
       <p>Unlimited projects and clients</p>
       <p>Reporting</p>
       <p className='strikedd'>Timer button in 50+ web apps</p>
       <p className='strikedd'>Calendar integrations: Google, Outlook</p>
       <p className='strikedd'>Budgeting for projects</p>
       <p className='strikedd'>Task management</p>
       <p className='strikedd'>Apps and sites usage reports</p>
       <p className='strikedd'>Paid time off tracking</p>
       <p className='strikedd'>Payroll for employees</p>
       <p className='strikedd'>Time Off Calendar</p>
<p className='strikedd'>Work Schedule</p>
<p className='strikedd'>Team Dashboard</p>
<p className='strikedd'>Time-sync with Jira and QuickBooks</p>

        </div>
        
    </div>
    <div className='get'>
    <Link to="./checkout"><button className='PlanB'>Proceed To Buy Plan</button></Link>
    </div>
           <Footer/>
    </div>
    
  )
}
