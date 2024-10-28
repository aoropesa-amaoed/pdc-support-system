import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Outlets from './pages/Outlets';
import Container from '@mui/material/Container'


function App() {   

  return (    
    <Container>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Outlets" element = {<Outlets />} /> 
      </Routes>   
    </Container>
       
  )
}

export default App;