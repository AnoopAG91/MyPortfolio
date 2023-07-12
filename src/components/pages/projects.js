import React from 'react'
import Navbar from '../Navbar/Navbar'
import './projects.css'
import Twitter_Image from '../../twitter_image.png'
import Portfolio_Image from '../../portfolio_image.png'
import Gym_Image from '../../gym_image.png'
import Kanban_Image from '../../kanban_image.png'
import { Link } from 'react-router-dom'


function Projects() {
  return (
    <div className='projects'>
        <Navbar/>
        <div className='projects-header'>
          <h1>My Projects</h1>
        </div>
        <div className='projects-hero'>
          <div className='pro-sec1'>
            <div className='pro1'>
              <img src={Twitter_Image}/>
              <div className='pro-text'>
              <h3>Twitter Clone</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <button><Link to={"http://localhost:3006/singin"}>Click here</Link></button>

            </div>
            <div className='pro2'>
            <img src={Kanban_Image}/>
            <div className='pro-text'>
              <h3>Kanban</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button><Link to={"https://kanban-5m6r.vercel.app/"}>Click here</Link></button>
            </div>
         </div>

         <div className='pro-sec2'>
            <div className='pro3'>
            <img src={Gym_Image}/>
            <div className='pro-text'>
              <h3>Gym website</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
             <button><Link to={""}>Click here</Link></button>
            </div>

            <div className='pro4'>
            <img src={Portfolio_Image}/>
            <div className='pro-text'>
              <h3>Portfolio</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
               <button><Link to={""}>Click here</Link></button>
            </div>
         </div>
        </div>

    </div>
  )
}

export default Projects