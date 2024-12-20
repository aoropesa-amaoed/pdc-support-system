import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Outlets from './pages/Outlets';

function App() {   
  return (    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Outlets" element={<Outlets />} /> 
    </Routes>   
  )
}

export default App;