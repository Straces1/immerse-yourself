import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import igIcon from './instagram-outlined.svg'
import fbIcon from './facebook-filled.svg'
import WhiteDivider from '../../Components/WhiteWave/WhiteWave.styled'

const NavBar = ({className}) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (id) => {
    const position = document.getElementById(id).getBoundingClientRect().top
    const offset = 100
    const finalPosition = window.pageYOffset + position - offset
    
    if (position) {
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      })
    } 
  }

  return (
    <header className={className}>
      <div>
        <Link to='https://www.instagram.com/straka.ondrej/' target='_blank'>
          <img src={igIcon} alt="" width={28}/>
        </Link>
        <Link to='https://www.facebook.com/ondrej.straka.313' target='_blank'>
          <img src={fbIcon} alt="" width={26}/>
        </Link>
      </div>

      {window.innerWidth >= 688 && 
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/classes'>Classes</Link>
          <Link to='/events'>Events</Link>
          <span onClick={() => handleScroll('contact-form')}>Contact</span>
        </nav>
      }

      {
        window.innerWidth < 688 &&
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger">click me</button>
      }

      
      {menuOpen && 
        <div onClick={() => setMenuOpen(false)} className='mobile-menu'>
          <nav>
            <Link onClick={() => setMenuOpen(false)} to='/'>Home</Link>
            <Link onClick={() => setMenuOpen(false)} to='/about'>About</Link>
            <Link onClick={() => setMenuOpen(false)} to='/classes'>Classes</Link>
            <Link onClick={() => setMenuOpen(false)} to='/events'>Events</Link>
            <span onClick={() => setMenuOpen(false)}>Contact</span>
          </nav>
        </div>
      }
      
    
      <WhiteDivider className='position'/>

      
    </header>
  )
}

export default NavBar
