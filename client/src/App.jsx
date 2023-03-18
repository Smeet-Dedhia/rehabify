import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './pages/Login';
import BioData from './pages/BioData';
import DAST from './pages/DAST';
import Dashboard from './pages/Dashboard';
import Forum from './pages/Forum';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Support from './pages/Support';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/biodata' element={<BioData/>} />
        <Route path='/dast' element={<DAST/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/forum' element={<Forum/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
