import React from 'react'
import {Link} from 'react-router-dom';

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <div className="stuff">
        <Link className='login' to='/dashboard'>Log In</Link>
        <p>Website created as a portfolio project by web developer <a href="mailto: ondrej.straka93@gmail.com">Ondrej Straka</a></p>
        <p>Designed as a portfolio project by <a href="mailto: vlasakovaanna1996@gmail.com">Anna Vlasakova</a></p>
        <p>© 2023</p>
      </div>
    </footer>
  )
}

export default Footer
