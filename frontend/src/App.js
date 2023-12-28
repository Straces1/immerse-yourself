import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages
import Home from './pages/Home/Home.styled'
import About from './pages/About/About.styled'
import Classes from './pages/Classes/Classes.styled'
import Events from './pages/Events/Events.styled'
import Login from './pages/Login/Login.styled'

// dashboard -- sub router pages
import Dashboard from './pages/Dashboard/Dashboard.styled'
import ClassesDash from './pages/Dashboard/Classes/Classes.styled'
import EventsDash from './pages/Dashboard/Events/Events.styled'
// import EmailListDash from './pages/Dashboard/EmailList/EmailList.styled'
import CreateUser from './pages/Dashboard/CreateUser/CreateUser.styled'


//components
import NavBar from './Components/NavBar/NavBar.styled'
import Footer from './Components/Footer/Footer.styled'
import ScrollToTop from './Components/ScrollToTop'


//styles
import {GlobalStyles} from './GlobalStyles.styled'


function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
      <GlobalStyles/>
      <BrowserRouter>

          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='classes' element={<Classes/>}/>
            <Route path='events' element={<Events/>}/>
            <Route path='dashboard' element={user ? <Dashboard/> : <Navigate to='/login'/>}>
              <Route index element={<ClassesDash/>}/>
              <Route path='classes-list' element={<ClassesDash/>}/>
              <Route path='events-list' element={<EventsDash/>}/>
              {/* <Route path='email-list' element={<EmailListDash/>}/> */}
              <Route path='create-user' element={<CreateUser />} />
            </Route>
            <Route path='login' element={!user ? <Login /> : <Navigate to='/dashboard' />} />
              
              
              
            
          </Routes>
          <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
