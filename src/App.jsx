import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

import './App.scss'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App
