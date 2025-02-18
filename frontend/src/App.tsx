
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homes from './pages/Homes'
import NewPage from './pages/NewPage'
// import { Button } from './components/ui/button'


function App() {
  

  return (
    <div className='m-0 p-0'>
    
    <Routes>
      <Route path='/' element={<Homes/> } />
      <Route path='/new' element={<NewPage/> } />
    </Routes>
    </div>
  )
}

export default App
