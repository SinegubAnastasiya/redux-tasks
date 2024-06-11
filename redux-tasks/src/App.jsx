import { Routes, Route  } from 'react-router-dom'
import Task1 from './pages/Task1/Task1'
import Task2 from './pages/Task2/Task2'
import Task3 from './pages/Task3/Task3'
import Task4 from './pages/Task4/Task4'
import Task5 from './pages/Task5/Task5'
import Task9 from './pages/Task9/Task9'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task9" element={<Task9 />} />
      </Routes>
    </>
  )
}

export default App
