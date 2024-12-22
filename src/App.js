import './App.css';  // Import CSS file
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes from react-router-dom
import Home from './Components/Home'; // Import Home component
import ParticlesBackground from './Components/ParticlesBackground'; //Import ParticlesBackground component

function App() { 
  return (
    <BrowserRouter>
    <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
