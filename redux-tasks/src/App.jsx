import { Routes, Route  } from 'react-router-dom'
import Task9 from './pages/Task9/Task9'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/task9" element={<Task9 />} />
      </Routes>
    </>
  )
}

export default App
