import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import Dashboard from './Components/Dashboard/Dashboard';
import { Incidents } from './Components/Incidents/Incidents';
import Location from './Components/FullLocation/Location';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Incidents" element={<Incidents />} />
          <Route path="/Locations" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
