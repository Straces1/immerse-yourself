import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import FlexContainer from '../../Components/FlexibleContainer'
import { useAuthContext } from '../../hooks/useAuthContext'

const Dashboard = ({className}) => {
  const {user} = useAuthContext()
  return (
    <div className={className}>
      <FlexContainer>
        <h1>Hi {user.name}, welcome to your admin page</h1>
        <p>Here you can add, edit and delete any of your events and classes, see a list of emails of whoever contacted you plus you can create another user who can access this dashboard too. </p>
        {user.role === 'test-admin' && <p><b>You are logged in as a test admin, you can only view this page, all the buttons are disabled</b></p>}
        <nav className="product-nav">
          <div>
            <Link to='/dashboard/classes-list'>Classes</Link>
            <Link to='/dashboard/events-list'>Events</Link>
            <Link to='/dashboard/email-list'>Email List</Link>
            <Link to='/dashboard/create-user'>Create User</Link>
          </div>
          <div></div>
        </nav>
        <Outlet />
      </FlexContainer>
    </div>
  )
}

export default Dashboard
