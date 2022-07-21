import React from 'react'
import "./Navbar.css"
import Footer from './Footer'
import Navbar from './Navbar'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div className='container'>       
             <Navbar/>
             <div className='Nav1'>
             <div><h1 className='H'>Make the best <br/>use of your time</h1>
             <h3 className='h3'>TMetric is a smart choice for time tracking to see work <br/>in progress and keep team, cost and quality under control</h3>
             <input  className='Input' type="email" placeholder='Enter Your Email'></input><br/>
             <Link to="./dash">
             <button className='but'> GET STARTED</button></Link>
             <p>Fully Functional 30 days trial</p>

             
             </div>
             <div className='Video'>
             <iframe className='Play' width="1215" height="720" src="https://www.youtube.com/embed/d2LwNiALPIM?list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f" title="TMetric | Time Tracking Software" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>
             <div className='Logo'> 
             <div><img className="logoimg"src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png" alt="" />
             <img className="logoimg" src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png" alt="" />
             <img className="logoimg"src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png" alt="" />
             <img className="logoimg" src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png" alt="" />
             <img className="logoimg"src="https://tmetric.com/media/a00doqsb/icon-customer-rating.png" alt="" />
             <img className="logoimg"src="https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png" alt="" />
             <img className="logoimg"src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg" alt="" /></div></div>
             <div className='Heading'>
             <div><h1 className='H2'>What makes TMetric your <br/>best business companion</h1><br/></div>
             <div className='Flex'>
             <div><img className='T' src="https://tmetric.com/media/e5enfaae/img-advantages.png" alt="" /></div>
             <div className='Divs'>
             <div className='Man'> <Link to="./dash"> Project Management</Link></div>
             <div className='Man'><Link to="./dash">Time Management</Link></div>
             <div className='Man'><Link to="./dash">Billing and invoicing</Link></div>
             <div className='Man'><Link to="./dash">Reporting</Link></div>
             <div className='Man'><Link to="./dash">Time Off</Link></div>
             </div>
             
             </div> 
             <div className='Int'><h1>Integration with 50+ popular services</h1><br/><p className='P'>TMetric integrates with dozens of services, which lets you measure progress and activity in any tool you use.</p>
             <button className='but'>GET STARTED</button>
             </div>
             <div className='Review'>
              <h1>Read Hundreds of Reviews</h1>
              <img src="https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg"/>
              <h1>4.5 Customer Rating</h1>
              <h2>242 Reviews</h2>
             </div>

             <div className='Q'><h1>Why choose TMetric?</h1>
             <div className='I'>
              <div className='Icon'>
              <img src="https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg"/>
              <h6>The most straightforward time tracking app</h6>
              </div>
              <div className='Icon'>
              <img src="https://tmetric.com/media/opdfdo3l/icon-platforms.svg"/>
              <h6>Available on all platforms: macOS, Windows, Linux, iOS, and Android</h6>
              
              
              </div>
              <div className='Icon'>
              <img src="https://tmetric.com/media/igkmpmix/icon-freetrial.svg"/>
              <h6>Free plan with basic time tracking for a team up to 5</h6>
              
              
              </div>
              <div className='Icon'>
              <img src="https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg"/>
              <h6>Reasonable price makes it affordable for anyone</h6>
              
              
              </div>
              <div className='Icon'>
              <img src="https://tmetric.com/media/0uyowzzu/icon-multilang.svg"/>
              <h6>Multilanguage solution</h6>
              
              
              </div>
             </div>
             </div>
             <div className='time'>
              <h1>Make time work for you!</h1>
              <button className='butt'>GET STARTED</button>
              <p>Powered by  A software vendor with 20 years of experience.</p>
             </div>
             <div> <img className='L' src="https://tse1.mm.bing.net/th?id=OIP.JB4Vs0E9KX-SSnjJuMX4dAAAAA&pid=Api&P=0" alt="image1"/></div>
             <Footer/>
             <div className='you'><p>Copyright © Devart 2022</p> </div>

             </div>  
             <div>
      
       </div>   
       
    </div>
   
  )
}

export default Home