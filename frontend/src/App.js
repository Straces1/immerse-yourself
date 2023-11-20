import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home/Home.styled'
import About from './pages/About/About.styled'
import Classes from './pages/Classes/Classes.styled'
import Events from './pages/Events/Events.styled'
import {
  DashboardStyled, 
  ClassesDash, 
  EventsDash, 
  EmailListDash
} from './pages/Dashboard/Dashboard.styled'

//components
import NavBar from './Components/NavBar/NavBar.styled'
import Footer from './Components/Footer/Footer.styled'
import ScrollToTop from './Components/ScrollToTop'


//styles
import {GlobalStyles} from './GlobalStyles.styled'


function App() {
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
            <Route path='dashboard' element={<DashboardStyled/>}>
              <Route index element={<ClassesDash/>}/>
              <Route path='classes-list' element={<ClassesDash/>}/>
              <Route path='events-list' element={<EventsDash/>}/>
              <Route path='email-list' element={<EmailListDash/>}/>
            </Route>
              
              
              
            
          </Routes>
          <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
