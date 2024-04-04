import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Personajes from './Components/Personajes.jsx'
import PersonajeDetail from './Components/PersonajeDetail.jsx'



function App() {

  return (
      <Routes>
      <Route path="/" element={<Navigate to="personajes" />} />
      <Route path="/personajes" element={<Personajes />} />
      <Route path='/PersonajeDetail/:id' element={<PersonajeDetail/>}/>
      </Routes>  
  )
}

export default App
