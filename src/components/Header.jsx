import { MenuOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import {Menu} from './Menu'
import {Link} from 'react-router-dom'
import './styles/Header.css'

const Header = () => {

    const [menu, setMenu] = useState(false)
   
    const showMenu = () => {
        setMenu(!menu)
    }

  return (
    <div  className='header' >

        <nav className='container' >

        <div className='menu' >
            <MenuOutlined className='menu-icon' onClick={showMenu} />
        </div>


        <div className="logo">
            <h1>Etravel</h1>
        </div>


        <div className="right">
            <ul className="ul-items">
                <li className="li-items">
                    <Link to='/' > Places </Link>
                    <Link to='/pricing' > Pricing </Link>
                    <Link to='/signup' > Sign Up </Link>
                    <Link to='/sponsors' > Sponsors </Link>
                </li>
            </ul>
        </div>

        </nav>

        <nav className={menu ? 'slider-active': 'slider' }>
             <ul onClick={showMenu} className='ul-item' >
                 {Menu.map((item,index) => {
                     return (
                         <div className='menu'>
                             <li  className={item.className} >
                                   <Link to={item.path} >  {item.text}   </Link>
                             </li>
                         </div>
                     )
                 } )}

             </ul>

          

        </nav>

    </div>
  )
}

export default Header