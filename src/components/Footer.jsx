import React from 'react'
import './styles/Footer.css'
import {Link}  from 'react-router-dom'
import { Facebook, FaceOutlined, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons'
const Footer = () => {
  return (
    <div className='footer'>

       <div className="cards">

          <div className="text">
           <div className="icons">
               <Instagram/>
               <Facebook/>
               <Twitter/>
               <YouTube/>
                <LinkedIn/>
               <GitHub/>
          
              </div>

              <ul className='ul-form'  >
                  <li className='li-form'>
                      <Link to='#' > MOST ASKED QUESTIONS ?</Link>
                      <Link to='#' >WHAT WE DO</Link>
                      <Link to='#' >   HISTORY OF COMPANY </Link>
                      <Link to='#'>OUR CLIENTS </Link>
                      <Link to='#' >MARKET PLACE</Link>
                  </li>
              </ul>
            </div>
              <form className='form-footer' >
                 <label htmlFor="">Name</label>
                 <input type="text" />
                 <label htmlFor="">email</label>
                 <input type="text" />
                 <textarea ></textarea>
                 <button>SEND MESSAGE</button>

              </form>
         

       </div>
      

    </div>
  )
}

export default Footer