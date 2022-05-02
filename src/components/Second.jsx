import React from 'react'
import './styles/Second.css'
import arab1 from './assets/new/arab1.jpg'
import khalifa1 from './assets/new/khalifa1.jpg'
import paris1 from  './assets/new/paris1.jpg'
import sofya1 from './assets/new/sofya1.jpg' 

const Second = () => {
  return (
    <section className='second' >
         
             <h1>Gallery</h1>
        
             


         <div className="second-container">
    
        

            <div className='part'>
                <img src={arab1} alt="" />
                  <h2>Dubai,UAE 2011</h2>
            </div>
            <div className='part'>
                <img src={khalifa1} alt="" />
                  <h2>Dubai,UAE 2011</h2>
            </div>
            <div className='part'>
                <img src={paris1} alt="" />
                  <h2>Paris,France 2011</h2>
            </div>
            <div className='part'>
                <img src={sofya1    } alt="" />
                  <h2>Istanbul,Turkish 2011</h2>
            </div>



         </div>

    </section>
  )
}

export default Second