import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import FlexContainer from '../../Components/FlexibleContainer'

const Dashboard = ({className}) => {
  return (
    <div className={className}>
      <FlexContainer>
        <h1>Hi Lisa, welcome to your admin page</h1>
        <p>Here you can add, edit and delete any of your events and classes. </p>
        <nav className="product-nav">
          <div>
            <Link to='/dashboard/classes-list'>Classes</Link>
            <Link to='/dashboard/events-list'>Events</Link>
            <Link to='/dashboard/email-list'>Email List</Link>
          </div>
          <div></div>
        </nav>
        <Outlet />
      </FlexContainer>
    </div>
  )
}

export default Dashboard
