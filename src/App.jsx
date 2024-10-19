import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import Dashboard from './Components/Dashboard/Dashboard';
import { Incidents } from './Components/Incidents/Incidents';
import Location from './Components/FullLocation/Location';
import { GetStarted } from './Components/Incidents/GetStarted';
import Which from './Components/Incidents/Which';
import { LetGive } from './Components/Incidents/LetGive'
import {Where} from './Components/Incidents/Where'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Incidents" element={<Incidents />} />
          <Route path="/Incidents/GetStarted" element={<GetStarted />} />
          <Route
            path="/Incidents/GetStarted/WhichSection"
            element={<Which />}
          />
          <Route
            path="/Incidents/GetStarted/WhichSection/LetsGive"
            element={<LetGive />}
          />
          <Route path="/Incidents/GetStarted/WhichSection/LetsGive/WhereSection" element={<Where/>} />
          <Route path="/Locations" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
