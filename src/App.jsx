import './App.css'
import CoursesPage from './pages/CoursesPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import WebDesign from './pages/WebDesign'
import UiUx from './pages/UiUx'
import Mobile from './pages/Mobile'
import Graphic from './pages/Graphic'
import Front from './pages/Front'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/uiux" element={<UiUx />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/front" element={<Front />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
