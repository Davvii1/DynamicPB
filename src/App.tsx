import { Routes, Route } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import Customize from './Customize'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/custom' element={<ProgressBar />} />
      <Route path='/' element={<Customize />} />
    </Routes>
  )
}

export default App

