import React, {useState} from 'react'
import { useLogin } from '../../hooks/useLogin'
import FlexContainer from '../../Components/FlexibleContainer'

const Login = ({className}) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleLogin = async (e) => {
        e.preventDefault()
        await login(name, password)
    }
  return (
    <main className={className}>
      <FlexContainer>
        <div className="container">
        <h1>Log in</h1>
            <form onSubmit={handleLogin}>
        
                <input 
                    type="text" name="name" placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                <input 
                    type="password" name="password" placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={isLoading}>Log in</button>
                {error && <span className='err'>{error}</span>}
            </form>
        </div>
      </FlexContainer>
    </main>
  )
}

export default Login
