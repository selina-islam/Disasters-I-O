import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          {/* <Route path='/incidents' element={<Incidents />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
