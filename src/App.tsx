import { Routes, Route } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import Customize from './Customize'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/DynamicPB/custom' element={<ProgressBar />} />
      <Route path='/DynamicPB' element={<Customize />} />
    </Routes>
  )
}

export default App

