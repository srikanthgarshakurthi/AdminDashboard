import { useState } from 'react'
import './App.css'
import Home from './Home'
import Header from './Header'
import Sidebar from "./Sidebar"

function App() {

const [openSidebarToggle, setOpenSidebarToggle] = useState (false)

const OpenSidebar = () => {
  setOpenSidebarToggle (!openSidebarToggle)
}

  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home />
    </div>
  )
}

export default App
