import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import BioData from './pages/BioData';
import DAST from './pages/DAST';
import Dashboard from './pages/Dashboard';
import Forum from './pages/Forum';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/biodata' element={<BioData/>} />
        <Route path='/dast' element={<DAST/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/forum' element={<Forum/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
