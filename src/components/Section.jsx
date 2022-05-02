import React, {useState} from 'react';
import './styles/Section.css';
import { Data } from './Data';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

const Section = ({slides}) => {
  const [first, setFirst] = useState(0)
  const length = slides.length

  const nextslide = () => {
      setFirst(first === length - 1 ? 0 : first + 1)
  }
  const prevslide = () => {
      setFirst(first === 0  ? length - 1 : first - 1)
  }

  return (
    <section>
        <div className="slide">

           <ArrowBack className='back' onClick={prevslide} />
           <ArrowForward className='forward' onClick={nextslide} />

            {Data.map((item,index) => {
                return (
                    <div className={item.className} >
                        <div className={index === first ? 'slides active' : 'slides'} >
                           {index === first && (
                               <div className='image'>  <img src={item.image} alt="" />  
                                 <p  className='places' >{item.taxt}</p>
                                 <p  className='status' >{item.status}</p>

                                <div className='buttons' >
                                       <button>Join</button>
                                       <button>Describe</button>
                                  </div>
                                  <div className='bottom'>
                                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, rerum.</p> 
                                  </div>

                                 

                               </div>
                                 
                              
                           ) }
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Section