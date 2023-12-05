import React from 'react'
import {Link} from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';


const Footer = ({className}) => {
  const {user} = useAuthContext()
  const { logout } = useLogout()
 
  const handleLogout = () => {
    logout()
  }
  return (
    <footer className={className}>
      <div className="stuff">
      {!user && <Link className='login' to='/login'>Log In</Link>}
      {user && <div className="admin">
        <Link className='login' to='/dashboard'>Dashboard</Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>}
        <p>Website created as a portfolio project by web developer <a href="mailto: ondrej.straka93@gmail.com">Ondrej Straka</a></p>
        <p>Designed as a portfolio project by <a href="mailto: vlasakovaanna1996@gmail.com">Anna Vlasakova</a></p>
        <p>© 2023</p>
      </div>
    </footer>
  )
}

export default Footer
