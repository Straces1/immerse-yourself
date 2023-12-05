import React, {useState, useEffect} from 'react'
import FlexContainer from '../../../Components/FlexibleContainer'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useSignup } from '../../../hooks/useSignup'
import Loader from '../../../Components/Loader/Loader'
import {DashPopUpSuccess} from '../../../Components/PopUp/PopUp.styled'

const CreateUser = ({className}) => {
  const [isAuthorized, setIsAuthorized] = useState(null)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const {signup, error, isLoading} = useSignup()
  const {user} = useAuthContext()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if(user.name === 'Lisa'){
      setIsAuthorized(true)
    }
  }, [user.name])

  const handleSignup = async (e) => {
    e.preventDefault()
    await signup(name, password, role)
    setShowPopup(true)
    if(!error){
      setName('')
      setPassword('')
    }
    
  }

  return (
    <main className={className}>
      <FlexContainer>
        <div className="container">
            <h1>Create New User</h1>
            <form onSubmit={handleSignup}>

                <input 
                  type="text" 
                  name='name' 
                  placeholder='Name'
                  onChange={(e) => {setName(e.target.value)}}
                  value={name}
                />

                <input 
                  type="password" 
                  name="passsword" 
                  placeholder='Password'
                  onChange={(e) => {setPassword(e.target.value)}}
                  value={password}
                />

                <select 
                  name="role"
                  onChange={(e) => {setRole(e.target.value)}}
                  value={role}
                >
                    <option value="" disabled hidden>Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="test-admin">Test Admin </option>
                </select>
                <button ><div>Submit</div> {!isAuthorized && <span style={{fontSize: '8pt', marginTop: '-8px'}}>Only Lisa can create new users</span>}</button>
                {error && <div className='err'>{error}</div>}
            </form>
            {isLoading && <div className='loading'><Loader/></div>}
            {!error ? <DashPopUpSuccess show={showPopup} content={`User ${name} successfully created`} onClose={() => {setShowPopup(false)}}/> : null}
        </div>
        
      </FlexContainer>
    </main>
  )
}

export default CreateUser
